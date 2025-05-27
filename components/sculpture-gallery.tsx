"use client"

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

interface Sculpture {
  id: number
  name: string
  file: string
  description: string
  year: string
}

const sculptures: Sculpture[] = [
  {
    id: 1,
    name: "Sculpture",
    file: "/glb/kip.glb",
    description: "A contemporary sculpture exploring form and space",
    year: "2023"
  },
]

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
    </div>
  )
}

function Model({ url, onLoad }: { url: string; onLoad?: () => void }) {
  const { scene } = useGLTF(url)
  
  // Call onLoad when the model is ready
  useEffect(() => {
    if (onLoad) onLoad()
  }, [scene, onLoad])
  
  return <primitive object={scene} scale={1} />
}

function SculptureViewer({ sculpture }: { sculpture: Sculpture }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleModelLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="w-full h-96 bg-gray-50 rounded-lg overflow-hidden shadow-lg relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-gray-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model url={sculpture.file} onLoad={handleModelLoad} />
          <Environment preset="studio" />
          <ContactShadows 
            position={[0, -1, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={1} 
            far={10} 
            resolution={256} 
            color="#000000" 
          />
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

function SculptureCard({ sculpture, isSelected, onClick }: { 
  sculpture: Sculpture
  isSelected: boolean
  onClick: () => void 
}) {
  return (
    <motion.div
      className={`cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <div className="h-64 flex-shrink-0">
          <SculptureViewer sculpture={sculpture} />
        </div>
        <div className="px-6 py-4 flex-grow min-h-[120px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{sculpture.name}</h3>
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{sculpture.description}</p>
          </div>
          <p className="text-sm text-gray-500 font-medium">{sculpture.year}</p>
        </div>
      </div>
    </motion.div>
  )
}

function FullscreenViewer({ sculpture, isOpen, onClose }: {
  sculpture: Sculpture | null
  isOpen: boolean
  onClose: () => void
}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleModelLoad = () => {
    setIsLoading(false)
  }

  // Reset loading state when sculpture changes
  useEffect(() => {
    if (sculpture) {
      setIsLoading(true)
    }
  }, [sculpture])

  if (!sculpture) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 3D Viewer */}
            <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="h-5/6 relative">
                {isLoading && (
                  <div className="absolute inset-0 z-10 bg-gray-50 flex items-center justify-center">
                    <LoadingSpinner />
                  </div>
                )}
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}
                >
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Model url={sculpture.file} onLoad={handleModelLoad} />
                    <Environment preset="studio" />
                    <ContactShadows 
                      position={[0, -1, 0]} 
                      opacity={0.4} 
                      scale={10} 
                      blur={1} 
                      far={10} 
                      resolution={256} 
                      color="#000000" 
                    />
                    <OrbitControls 
                      enablePan={true} 
                      enableZoom={true} 
                      enableRotate={true}
                    />
                  </Suspense>
                </Canvas>
              </div>
              
              {/* Sculpture info */}
              <div className="p-6 bg-white h-1/6 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{sculpture.name}</h3>
                  <p className="text-gray-600 mb-1">{sculpture.description}</p>
                  <p className="text-gray-500">{sculpture.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function SculptureGallery() {
  const [selectedSculpture, setSelectedSculpture] = useState<Sculpture | null>(null)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

  const handleSculptureClick = (sculpture: Sculpture) => {
    setSelectedSculpture(sculpture)
    setIsFullscreenOpen(true)
  }

  const handleCloseFullscreen = () => {
    setIsFullscreenOpen(false)
    setTimeout(() => setSelectedSculpture(null), 300)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row justify-center gap-8">
        {sculptures.map((sculpture) => (
          <SculptureCard
            key={sculpture.id}
            sculpture={sculpture}
            isSelected={selectedSculpture?.id === sculpture.id}
            onClick={() => handleSculptureClick(sculpture)}
          />
        ))}
      </div>

      <FullscreenViewer
        sculpture={selectedSculpture}
        isOpen={isFullscreenOpen}
        onClose={handleCloseFullscreen}
      />

      <div className="mt-12 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click on any sculpture to view it in fullscreen. Use your mouse to rotate, zoom, and explore each piece in detail.
        </p>
      </div>
    </div>
  )
} 