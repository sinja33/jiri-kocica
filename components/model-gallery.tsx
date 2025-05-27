"use client";

import { useState, useEffect, useCallback } from "react";
import SculptureViewer, { preloadModel } from "./sculpture-viewer";

interface ModelItem {
  id: string;
  name: string;
  path: string;
  thumbnail?: string;
  description?: string;
}

interface ModelGalleryProps {
  models: ModelItem[];
  className?: string;
  preloadNext?: boolean; // Preload next model for smoother transitions
  showThumbnails?: boolean;
}

export default function ModelGallery({
  models,
  className = "",
  preloadNext = true,
  showThumbnails = true,
}: ModelGalleryProps) {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [loadedModels, setLoadedModels] = useState<Set<string>>(new Set());

  const currentModel = models[currentModelIndex];

  // Preload current and next model
  useEffect(() => {
    if (currentModel) {
      preloadModel(currentModel.path);
      setLoadedModels(prev => new Set(prev).add(currentModel.path));
    }

    // Preload next model for smoother transitions
    if (preloadNext && models[currentModelIndex + 1]) {
      const nextModel = models[currentModelIndex + 1];
      preloadModel(nextModel.path);
      setLoadedModels(prev => new Set(prev).add(nextModel.path));
    }
  }, [currentModelIndex, currentModel, preloadNext, models]);

  const handleModelChange = useCallback((index: number) => {
    if (index >= 0 && index < models.length) {
      setCurrentModelIndex(index);
    }
  }, [models.length]);

  const handleNext = useCallback(() => {
    handleModelChange((currentModelIndex + 1) % models.length);
  }, [currentModelIndex, models.length, handleModelChange]);

  const handlePrevious = useCallback(() => {
    handleModelChange(currentModelIndex === 0 ? models.length - 1 : currentModelIndex - 1);
  }, [currentModelIndex, models.length, handleModelChange]);

  if (!currentModel) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No models available
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {/* Model Viewer */}
      <div className="relative">
        <SculptureViewer
          modelPath={currentModel.path}
          className="h-96 rounded-lg overflow-hidden shadow-lg"
          key={currentModel.id} // Force re-render when model changes
        />
        
        {/* Navigation Controls */}
        {models.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous model"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next model"
            >
              →
            </button>
          </>
        )}

        {/* Model Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white p-3 rounded-lg">
          <h3 className="font-semibold">{currentModel.name}</h3>
          {currentModel.description && (
            <p className="text-sm opacity-90">{currentModel.description}</p>
          )}
          <p className="text-xs opacity-75">
            {currentModelIndex + 1} of {models.length}
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {showThumbnails && models.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {models.map((model, index) => (
            <button
              key={model.id}
              onClick={() => handleModelChange(index)}
              className={`flex-shrink-0 p-2 rounded-lg border-2 transition-colors ${
                index === currentModelIndex
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {model.thumbnail ? (
                <img
                  src={model.thumbnail}
                  alt={model.name}
                  className="w-16 h-16 object-cover rounded"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center">
                    {model.name}
                  </span>
                </div>
              )}
              {loadedModels.has(model.path) && (
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mx-auto"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Keyboard Navigation Hint */}
      {models.length > 1 && (
        <div className="text-xs text-gray-500 text-center">
          Use arrow keys or click thumbnails to navigate
        </div>
      )}
    </div>
  );
}

// Hook for keyboard navigation
export function useKeyboardNavigation(
  onNext: () => void,
  onPrevious: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ": // Spacebar
          event.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
          event.preventDefault();
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious, enabled]);
} 