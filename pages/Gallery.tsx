import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_ARTWORKS, SIDEBAR_MAP } from '../constants';
import GalleryItem from '../components/GalleryItem';

interface GalleryProps {
  type: string;
  isSubCategory?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ type }) => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isPortraitSection = location.pathname.startsWith('/portraits');
  const isRootPortraits = location.pathname === '/portraits';
  
  const isWorkSection = location.pathname.startsWith('/work');
  const isRootWork = location.pathname === '/work';
  
  const isPhotographsSection = location.pathname === '/photographs';
  const isCollectionsSection = location.pathname === '/collections';

  let effectiveType = type;
  if (isRootPortraits) effectiveType = 'mexican-wrestler-one';
  if (isRootWork) effectiveType = 'adhd';
  
  const artworks = MOCK_ARTWORKS[effectiveType] || [];
  const baseSidebar = SIDEBAR_MAP[type] || [];

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

  // Determine if we should show any sidebar sub-nav
  const showSidebar = isWorkSection || isPortraitSection || (baseSidebar.length > 0 && !isPhotographsSection && !isCollectionsSection);

  return (
    <div id="cat_main">
      <div id="cat_left">
  {showSidebar && (
    <div className="pt-7">
      <ul className="cat-list">
        {isWorkSection ? (
          <>
            <li>
              <Link
                to="/work/adhd"
                className={(location.pathname === '/work/adhd' || isRootWork) ? 'active' : ''}
              >
                ADHD
              </Link>
            </li>
            <li>
              <Link
                to="/work/punk-plates"
                className={location.pathname === '/work/punk-plates' ? 'active' : ''}
              >
                PUNK PLATES
              </Link>
            </li>
            <li>
              <Link
                to="/work/but-i-love-you"
                className={location.pathname === '/work/but-i-love-you' ? 'active' : ''}
              >
                BUT I LOVE YOU
              </Link>
            </li>
          </>
        ) : isPortraitSection ? (
          <>
            <li>
              <Link
                to="/portraits/mexican-wrestler-one"
                className={(location.pathname === '/portraits/mexican-wrestler-one' || isRootPortraits) ? 'active' : ''}
              >
                Mexican Wrestler One
              </Link>
            </li>
            <li>
              <Link
                to="/portraits/mexican-wrestler-two"
                className={location.pathname === '/portraits/mexican-wrestler-two' ? 'active' : ''}
              >
                Mexican Wrestler Two
              </Link>
            </li>
            <li>
              <Link
                to="/portraits/mexican-wrestler-three"
                className={location.pathname === '/portraits/mexican-wrestler-three' ? 'active' : ''}
              >
                Mexican Wrestler Three
              </Link>
            </li>
          </>
        ) : (
          <>
            {baseSidebar.map((cat, index) => (
              <li key={cat}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={index === 0 ? 'active' : ''}
                >
                  {cat}
                </a>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  )}
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
              Gallery content coming soon.
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

export default Gallery;