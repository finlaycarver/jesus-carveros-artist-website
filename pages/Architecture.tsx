import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_ARTWORKS } from '../constants';
import GalleryItem from '../components/GalleryItem';

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
  const artworks = MOCK_ARTWORKS[effectiveType] || [];

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
          <li>
            <Link 
              to="/architecture/chandlers-reach" 
              className={location.pathname === '/architecture/chandlers-reach' ? 'active' : ''}
            >
              CHANDLERS REACH
            </Link>
          </li>
          <li>
            <Link 
              to="/architecture/starvecrow" 
              className={location.pathname === '/architecture/starvecrow' ? 'active' : ''}
            >
              STARVECROW
            </Link>
          </li>
        </ul>
      </div>

      <div id="cat_right" className="flex-1">
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
              Architecture project content coming soon.
            </p>
          </div>
        )}
      </div>

      {selectedArt && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <button className="lb-nav-btn prev" onClick={prevImage}>&lsaquo;</button>
          <button className="lb-nav-btn next" onClick={nextImage}>&rsaquo;</button>

          <div className="modal-content relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedArt.imageUrl} alt="Expanded view" className="shadow-2xl" />
            <div className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              Arrows to navigate • ESC to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Architecture;