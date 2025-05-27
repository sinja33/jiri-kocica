"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

type ImageSize = 'small' | 'medium' | 'large';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  year: string;
  size: ImageSize;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/Biti1.jpg',
    title: 'Being',
    year: '2023',
    size: 'large'
  },
  {
    id: 2,
    src: '/Insula_drugasoba.jpg',
    title: 'DNA Heritage',
    year: '2022',
    size: 'medium'
  },
  {
    id: 3,
    src: '/jure_jiri3.jpg',
    title: 'Collaboration',
    year: '2022',
    size: 'small'
  },
  {
    id: 4,
    src: '/izvirnik.jpg',
    title: 'Izvirnik',
    year: '2018',
    size: 'medium'
  },
  {
    id: 5,
    src: '/artsidethebox2.jpg',
    title: 'Artside the Box',
    year: '2016',
    size: 'large'
  },
  {
    id: 6,
    src: '/odprtiatelje1.jpg',
    title: 'Open Studio',
    year: '2015',
    size: 'small'
  },
  {
    id: 7,
    src: '/NGprerokinje.jpg',
    title: 'Heritage',
    year: '2014',
    size: 'medium'
  },
  {
    id: 8,
    src: '/CD.jpg',
    title: 'Cankarjev Dom',
    year: '2014',
    size: 'large'
  },
  {
    id: 9,
    src: '/seedkeepers_gel1.jpg',
    title: 'Seed Keepers',
    year: '2013',
    size: 'medium'
  },
  {
    id: 10,
    src: '/EF3.jpg',
    title: 'Faculty Installation',
    year: '2013',
    size: 'small'
  },
  {
    id: 11,
    src: '/signsofscience.jpg',
    title: 'Signs of Science',
    year: '2013',
    size: 'large'
  },
  {
    id: 12,
    src: '/nano1.jpg',
    title: 'Nano Portrait',
    year: '2012',
    size: 'medium'
  },
  {
    id: 13,
    src: '/MCGallery-kip.jpg',
    title: 'MC Gallery NYC',
    year: '2012',
    size: 'small'
  },
  {
    id: 14,
    src: '/bosi2www.jpg',
    title: '95 Theses on Art',
    year: '2012',
    size: 'medium'
  },
  {
    id: 15,
    src: '/ambasada1.jpg',
    title: 'Embassy Exhibition',
    year: '2012',
    size: 'large'
  }
];

// Image Modal Dialog Component
function ImageModal({ image, isOpen, onClose }: { 
  image: GalleryImage | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!image) return null;

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
            className="relative max-w-4xl max-h-[90vh] w-full"
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

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto max-h-[70vh] object-contain pt-6"
              />
              
              {/* Image info */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-lg">{image.year}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingImage({ 
  image, 
  index, 
  onImageClick 
}: { 
  image: GalleryImage; 
  index: number; 
  onImageClick: (image: GalleryImage) => void; 
}) {
  const lastTapRef = useRef<number>(0);
  const tapCountRef = useRef<number>(0);

  // Size classes based on image size property
  const sizeClasses: Record<ImageSize, string> = {
    small: 'w-48 h-32',
    medium: 'w-64 h-48',
    large: 'w-80 h-64'
  };

  // Random positioning and rotation
  const randomPosition = {
    top: `${Math.random() * 60 + 10}%`,
    left: `${Math.random() * 70 + 5}%`,
  };

  const randomRotation = Math.random() * 20 - 10; // -10 to 10 degrees

  // Handle double click for desktop
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onImageClick(image);
  };

  // Handle touch events for mobile double-tap
  const handleTouchEnd = (e: React.TouchEvent) => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapRef.current;
    
    if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
      // Double tap detected
      tapCountRef.current += 1;
      if (tapCountRef.current === 2) {
        e.preventDefault();
        e.stopPropagation();
        onImageClick(image);
        tapCountRef.current = 0;
      }
    } else {
      tapCountRef.current = 1;
    }
    
    lastTapRef.current = now;
    
    // Reset tap count after delay
    setTimeout(() => {
      tapCountRef.current = 0;
    }, 300);
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[image.size]} cursor-grab active:cursor-grabbing group`}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        ...randomPosition
      }}
      animate={{ 
        opacity: 1, 
        scale: 1
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        zIndex: 50,
        transition: { duration: 0.2 }
      }}
      whileDrag={{ 
        scale: 1.1,
        zIndex: 100,
        rotate: 5,
        transition: { duration: 0.1 }
      }}
      drag
      dragMomentum={false}
      dragElastic={0.2}
      dragConstraints={{
        top: -window?.innerHeight || -800,
        left: -300,
        right: window?.innerWidth ? window.innerWidth - 50 : 1200,
        bottom: window?.innerHeight ? window.innerHeight * 2 : 2000,
      }}
    >
      {/* Image container with shadow and hover effects */}
      <div 
        className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
        onDoubleClick={handleDoubleClick}
        onTouchEnd={handleTouchEnd}
        style={{ pointerEvents: 'auto' }}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable={false}
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Overlay with image info */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end" style={{ pointerEvents: 'none' }}>
          <div className="text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-bold text-lg">{image.title}</h3>
            <p className="text-sm opacity-90">{image.year}</p>
            <p className="text-xs opacity-75 mt-1">Double-click to enlarge</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Reduced particles for better performance */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-200 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

export default function ArtsyGallery() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300); // Wait for animation to complete
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <BackgroundAnimation />

      {/* Floating Images */}
      <div className="relative min-h-[200vh] w-full">
        {galleryImages.map((image, index) => (
          <FloatingImage 
            key={image.id} 
            image={image} 
            index={index} 
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal 
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}