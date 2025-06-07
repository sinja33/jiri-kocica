# Jiří Kočica - Contemporary Sculpture Artist Portfolio

A modern, interactive portfolio website showcasing the sculptural works and exhibitions of contemporary artist Jiří Kočica. Built with Next.js, TypeScript, and Three.js for immersive 3D sculpture viewing.
## 🚀 Getting Started

The site is available at https://jiri-kocica.vercel.app/ 

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd jiri-kocica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Features

### Interactive 3D Sculpture Gallery
- **Real-time 3D model viewing** with Three.js and React Three Fiber
- **Interactive controls** - rotate, zoom, and explore sculptures in detail
- **3D model preloading** for smooth user experience
- **Responsive design** optimized for all devices

### Gallery Experiences
- **Artsy Interactive Gallery** - Drag and drop floating images with double-click to enlarge
- **Traditional Work Gallery** - Curated collection with detailed information
- **Timeline Exhibitions** - Chronological exhibition history with rich media

### Modern Web Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Three.js** for 3D rendering


## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact information
│   ├── exhibitions/       # Exhibition timeline
│   ├── gallery/           # Interactive artsy gallery
│   ├── sculptures/        # 3D sculpture viewer
│   ├── work/              # Traditional portfolio
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── artsy-gallery.tsx # Interactive floating gallery
│   ├── footer.tsx        # Site footer
│   ├── model-gallery.tsx # 3D model gallery component
│   ├── navigation.tsx    # Site navigation
│   ├── sculpture-gallery.tsx # 3D sculpture display
│   ├── sculpture-viewer.tsx  # Individual 3D viewer
│   └── theme-provider.tsx    # Theme management
├── utils/                # Utility functions
│   └── model-loader.ts   # 3D model loading and caching
├── public/               # Static assets
│   ├── work/            # Sculpture images
│   ├── glb/             # 3D model files
│   └── ...              # Other images
└── lib/                 # Shared utilities
    └── utils.ts         # Common helper functions
```

## 🎨 Adding New Content

### Adding New Sculptures

1. **Add 3D model** to `public/glb/`
2. **Update sculpture data** in `components/sculpture-gallery.tsx`:
   ```tsx
   const sculptures: Sculpture[] = [
     {
       id: 2,
       name: "New Sculpture",
       file: "/glb/new-sculpture.glb",
       description: "Description of the sculpture",
       year: "2024"
     }
   ];
   ```

### Adding New Exhibition Images

1. **Add images** to `public/` directory
2. **Update gallery data** in `components/artsy-gallery.tsx`:
   ```tsx
   const galleryImages: GalleryImage[] = [
     {
       id: 16,
       src: '/new-exhibition.jpg',
       title: 'New Exhibition',
       year: '2024',
       size: 'large'
     }
   ];
   ```

### Adding New Work Pieces

1. **Add images** to `public/work/`
2. **Update gallery items** in `app/work/page.tsx`:
   ```tsx
   const galleryItems = [
     {
       id: 21,
       image: "/work/new-piece.png",
       title: "New Piece",
       materials: "Bronze and marble",
       length: "15 cm",
       height: "25 cm"
     }
   ];
   ```

## 📱 Mobile Experience

The portfolio is fully responsive with mobile-optimized features:
- **Touch controls** for 3D models
- **Mobile navigation** with hamburger menu
- **Optimized interactions** for touch devices
- **Performance tuning** for mobile browsers

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The project is optimized for Vercel deployment:
```bash
npm start
```
