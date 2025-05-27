import { useGLTF } from "@react-three/drei";

// Cache for loaded models to prevent re-downloading
const modelCache = new Map<string, any>();

// Queue for preloading models
const preloadQueue: string[] = [];
let isPreloading = false;

/**
 * Enhanced model loader with caching and error handling
 */
export class ModelLoader {
  private static instance: ModelLoader;
  private loadingPromises = new Map<string, Promise<any>>();
  private errorCache = new Set<string>();

  static getInstance(): ModelLoader {
    if (!ModelLoader.instance) {
      ModelLoader.instance = new ModelLoader();
    }
    return ModelLoader.instance;
  }

  /**
   * Load a model with caching
   */
  async loadModel(path: string): Promise<any> {
    // Return cached model if available
    if (modelCache.has(path)) {
      return modelCache.get(path);
    }

    // Return existing loading promise if in progress
    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path);
    }

    // Check if this model previously failed to load
    if (this.errorCache.has(path)) {
      throw new Error(`Model ${path} previously failed to load`);
    }

    // Create new loading promise
    const loadingPromise = this.loadModelInternal(path);
    this.loadingPromises.set(path, loadingPromise);

    try {
      const model = await loadingPromise;
      modelCache.set(path, model);
      this.loadingPromises.delete(path);
      return model;
    } catch (error) {
      this.errorCache.add(path);
      this.loadingPromises.delete(path);
      throw error;
    }
  }

  private async loadModelInternal(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        // Use drei's useGLTF preload functionality
        useGLTF.preload(path);
        
        // Simulate loading with timeout for error handling
        const timeout = setTimeout(() => {
          reject(new Error(`Model loading timeout: ${path}`));
        }, 30000); // 30 second timeout

        // In a real implementation, you'd listen for the actual load event
        // For now, we'll resolve after a short delay to simulate loading
        setTimeout(() => {
          clearTimeout(timeout);
          try {
            const gltf = useGLTF(path);
            resolve(gltf);
          } catch (error) {
            reject(error);
          }
        }, 100);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Preload models in the background
   */
  preloadModels(paths: string[]): void {
    preloadQueue.push(...paths.filter(path => !modelCache.has(path)));
    this.processPreloadQueue();
  }

  private async processPreloadQueue(): Promise<void> {
    if (isPreloading || preloadQueue.length === 0) {
      return;
    }

    isPreloading = true;

    while (preloadQueue.length > 0) {
      const path = preloadQueue.shift()!;
      try {
        await this.loadModel(path);
        console.log(`Preloaded model: ${path}`);
      } catch (error) {
        console.warn(`Failed to preload model: ${path}`, error);
      }
      
      // Small delay to prevent blocking the main thread
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isPreloading = false;
  }

  /**
   * Clear cache for memory management
   */
  clearCache(): void {
    modelCache.clear();
    this.errorCache.clear();
    this.loadingPromises.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { cached: number; loading: number; errors: number } {
    return {
      cached: modelCache.size,
      loading: this.loadingPromises.size,
      errors: this.errorCache.size,
    };
  }

  /**
   * Check if a model is cached
   */
  isCached(path: string): boolean {
    return modelCache.has(path);
  }

  /**
   * Check if a model is currently loading
   */
  isLoading(path: string): boolean {
    return this.loadingPromises.has(path);
  }

  /**
   * Remove a specific model from cache
   */
  removeFromCache(path: string): void {
    modelCache.delete(path);
    this.errorCache.delete(path);
  }
}

/**
 * Hook for using the model loader
 */
export function useModelLoader() {
  return ModelLoader.getInstance();
}

/**
 * Utility function to optimize GLB files for web
 */
export const ModelOptimizationTips = {
  // File size recommendations
  maxFileSize: 10 * 1024 * 1024, // 10MB
  recommendedFileSize: 2 * 1024 * 1024, // 2MB

  // Optimization suggestions
  suggestions: [
    "Use Draco compression for geometry",
    "Optimize textures (use WebP or compressed formats)",
    "Reduce polygon count for web viewing",
    "Remove unnecessary animations or materials",
    "Use texture atlasing to reduce draw calls",
    "Consider using LOD (Level of Detail) models",
  ],

  // Check if file size is optimal
  checkFileSize(sizeInBytes: number): {
    isOptimal: boolean;
    recommendation: string;
  } {
    if (sizeInBytes <= this.recommendedFileSize) {
      return {
        isOptimal: true,
        recommendation: "File size is optimal for web viewing",
      };
    } else if (sizeInBytes <= this.maxFileSize) {
      return {
        isOptimal: false,
        recommendation: "Consider optimizing for better performance",
      };
    } else {
      return {
        isOptimal: false,
        recommendation: "File is too large, optimization strongly recommended",
      };
    }
  },
};

/**
 * Utility to batch preload models
 */
export function batchPreloadModels(modelPaths: string[], batchSize = 3): void {
  const loader = ModelLoader.getInstance();
  
  // Process in batches to avoid overwhelming the browser
  for (let i = 0; i < modelPaths.length; i += batchSize) {
    const batch = modelPaths.slice(i, i + batchSize);
    setTimeout(() => {
      loader.preloadModels(batch);
    }, i * 1000); // Stagger batches by 1 second
  }
} 