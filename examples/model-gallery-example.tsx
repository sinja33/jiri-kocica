"use client";

import { useEffect } from "react";
import ModelGallery, { useKeyboardNavigation } from "../components/model-gallery";
import SculptureViewer from "../components/sculpture-viewer";
import { batchPreloadModels, ModelOptimizationTips } from "../utils/model-loader";

// Example model data
const exampleModels = [
  {
    id: "sculpture-1",
    name: "Classical Bust",
    path: "/models/bust.glb",
    description: "A classical marble bust sculpture",
    thumbnail: "/thumbnails/bust.jpg",
  },
  {
    id: "sculpture-2", 
    name: "Modern Abstract",
    path: "/models/abstract.glb",
    description: "Contemporary abstract sculpture",
    thumbnail: "/thumbnails/abstract.jpg",
  },
  {
    id: "sculpture-3",
    name: "Ancient Artifact",
    path: "/models/artifact.glb", 
    description: "Historical archaeological find",
    thumbnail: "/thumbnails/artifact.jpg",
  },
  {
    id: "sculpture-4",
    name: "Your Original Model",
    path: "/kip.glb",
    description: "The original sculpture model",
  },
];

export default function ModelGalleryExample() {
  // Preload all models on component mount for better UX
  useEffect(() => {
    const modelPaths = exampleModels.map(model => model.path);
    batchPreloadModels(modelPaths, 2); // Load 2 at a time
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">3D Model Gallery</h1>
      
      {/* Performance Tips Section */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Performance Tips</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          {ModelOptimizationTips.suggestions.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Gallery */}
      <ModelGallery 
        models={exampleModels}
        className="mb-8"
        preloadNext={true}
        showThumbnails={true}
      />

      {/* Individual Viewer Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Individual Viewer</h2>
          <SculptureViewer 
            modelPath="/kip.glb"
            className="h-64"
            showControls={true}
            autoRotate={true}
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Static Display</h2>
          <SculptureViewer 
            modelPath="/kip.glb"
            className="h-64"
            showControls={false}
            autoRotate={false}
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How to Use</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">1. Single Model Viewer</h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mt-2 overflow-x-auto">
{`import SculptureViewer from "./components/sculpture-viewer";

<SculptureViewer 
  modelPath="/your-model.glb"
  className="h-96"
  showControls={true}
  autoRotate={true}
/>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium">2. Model Gallery</h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mt-2 overflow-x-auto">
{`import ModelGallery from "./components/model-gallery";

const models = [
  {
    id: "model-1",
    name: "My Model",
    path: "/model.glb",
    description: "Description here"
  }
];

<ModelGallery 
  models={models}
  preloadNext={true}
  showThumbnails={true}
/>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium">3. Preloading Models</h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm mt-2 overflow-x-auto">
{`import { batchPreloadModels } from "./utils/model-loader";

// Preload models in the background
useEffect(() => {
  const modelPaths = ["/model1.glb", "/model2.glb"];
  batchPreloadModels(modelPaths, 2);
}, []);`}
            </pre>
          </div>
        </div>
      </div>

      {/* File Organization Tips */}
      <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">File Organization</h2>
        <div className="text-sm text-gray-700">
          <p className="mb-2">Recommended folder structure:</p>
          <pre className="bg-gray-800 text-green-400 p-3 rounded">
{`public/
├── models/           # Your GLB files
│   ├── sculpture1.glb
│   ├── sculpture2.glb
│   └── ...
├── thumbnails/       # Preview images
│   ├── sculpture1.jpg
│   ├── sculpture2.jpg
│   └── ...
└── ...`}
          </pre>
        </div>
      </div>
    </div>
  );
}

// Example of a page component using the gallery
export function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ModelGalleryExample />
    </div>
  );
} 