import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ARTWORKS } from '../constants';
import GalleryItem from '../components/GalleryItem';
import Lightbox from '../components/Lightbox';

const Architecture: React.FC = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isRootArchitecture = location.pathname === '/architecture';
  
  // Mapping paths to data keys
  const routeMap: Record<string, string> = {
    '/architecture/duneland': 'architecture-duneland',
    '/architecture/larkrise': 'architecture-larkrise',
    '/architecture/tide-view': 'architecture-tide-view',
    '/architecture/chandlers-reach': 'architecture-chandlers-reach',
    '/architecture/starvecrow': 'architecture-starvecrow',
  };

  const effectiveType = isRootArchitecture ? 'architecture-duneland' : (routeMap[location.pathname] || 'architecture-duneland');
  const artworks = ARTWORKS[effectiveType] || [];

  useEffect(() => {
    document.title = 'Architecture — Jesus Carveros';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % artworks.length : null));
  }, [artworks.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + artworks.length) % artworks.length : null));
  }, [artworks.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  const selectedArt = selectedIndex !== null ? artworks[selectedIndex] : null;

  return (
    <div id="cat_main">
      <div id="cat_left">
        <div className="pt-7">
          <ul className="cat-list">
            <li>
              <Link 
                to="/architecture/duneland" 
                className={(location.pathname === '/architecture/duneland' || isRootArchitecture) ? 'active' : ''}
              >
                DUNELAND
              </Link>
            </li>
            <li>
              <Link 
                to="/architecture/larkrise" 
                className={location.pathname === '/architecture/larkrise' ? 'active' : ''}
              >
                LARKRISE
              </Link>
            </li>
            <li>
              <Link 
                to="/architecture/tide-view" 
                className={location.pathname === '/architecture/tide-view' ? 'active' : ''}
              >
                TIDE VIEW
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="cat_right" className="flex-1">
        <h1 className="sr-only">Architecture</h1>
        {artworks.length > 0 ? (
          <div id="ss_thumbs">
            {artworks.map((art, idx) => (
              <GalleryItem 
                key={art.id} 
                art={art} 
                index={idx}
                onExpand={setSelectedIndex} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start pt-4">
            <p className="text-[#bdbdbd] font-bold uppercase tracking-widest text-sm">
              This project will be added soon.
            </p>
          </div>
        )}
      </div>

      {selectedArt && (
        <Lightbox
          imageUrl={selectedArt.imageUrl}
          onClose={() => setSelectedIndex(null)}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default Architecture;