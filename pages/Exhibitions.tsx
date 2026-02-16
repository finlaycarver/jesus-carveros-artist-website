import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_ARTWORKS, SIDEBAR_MAP } from '../constants';
import GalleryItem from '../components/GalleryItem';

const Exhibitions: React.FC = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const categories = SIDEBAR_MAP['exhibitions'] || ['Common Ground', 'ORDERED CHAOS', 'TRANSFORMATION'];
  
  // Routing logic consistent with Gallery.tsx
  const isRootExhibitions = location.pathname === '/exhibitions';
  const isOrderedChaos = location.pathname === '/exhibitions/ordered-chaos';
  const isTransformation = location.pathname === '/exhibitions/transformation';
  const isCommonGround = location.pathname === '/exhibitions/common-ground' || isRootExhibitions;

  let activeCategory = 'Common Ground';
  if (isOrderedChaos) activeCategory = 'ORDERED CHAOS';
  if (isTransformation) activeCategory = 'TRANSFORMATION';

  let dataKey = 'exhibitions'; // Default to Common Ground
  if (activeCategory === 'ORDERED CHAOS') dataKey = 'ordered-chaos';
  if (activeCategory === 'TRANSFORMATION') dataKey = 'transformation';
  
  const artworks = MOCK_ARTWORKS[dataKey] || [];

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
                to="/exhibitions/common-ground" 
                className={isCommonGround ? 'active' : ''}
              >
                COMMON GROUND
              </Link>
            </li>
            <li>
              <Link 
                to="/exhibitions/ordered-chaos" 
                className={isOrderedChaos ? 'active' : ''}
              >
                ORDERED CHAOS
              </Link>
            </li>
            <li>
              <Link 
                to="/exhibitions/transformation" 
                className={isTransformation ? 'active' : ''}
              >
                TRANSFORMATION
              </Link>
            </li>
          </ul>
        </div>
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
              Exhibition content coming soon.
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

export default Exhibitions;