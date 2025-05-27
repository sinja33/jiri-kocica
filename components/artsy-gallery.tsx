"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

function FloatingImage({ image, index }: { image: GalleryImage, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

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
      style={{ perspective: 1000 }}
    >
      {/* 3D Card Container */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 pointer-events-none">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
            draggable={false}
          />
          
          {/* Overlay with image info */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end pointer-events-none">
            <div className="text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-lg">{image.title}</h3>
              <p className="text-sm opacity-90">{image.year}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white flex flex-col justify-center items-center p-6"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">{image.title}</h3>
          <p className="text-lg mb-2">{image.year}</p>
          <p className="text-sm opacity-75 text-center mb-4">Exhibition Piece</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Flip Back
          </button>
        </div>
      </motion.div>
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <BackgroundAnimation />

      {/* Floating Images */}
      <div className="relative min-h-[200vh] w-full">
        {galleryImages.map((image, index) => (
          <FloatingImage key={image.id} image={image} index={index} />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm mb-2">Scroll to explore • Drag to rearrange • Click to flip</div>
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full mx-auto flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}