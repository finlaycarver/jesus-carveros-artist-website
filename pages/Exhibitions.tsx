import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EXHIBITION_VIDEOS: Record<string, string[]> = {
  'common-ground': [
    'https://www.youtube.com/embed/5HyT3YN89Fk',
  ],
  'ordered-chaos': [
    'https://www.youtube.com/embed/RGquKeAEB_s',
  ],
  'transformation': [
    'https://www.youtube.com/embed/dvpWPBF4nIA',
  ],
};

const Exhibitions: React.FC = () => {
  const location = useLocation();

  const isRootExhibitions = location.pathname === '/exhibitions';
  const isOrderedChaos = location.pathname === '/exhibitions/ordered-chaos';
  const isTransformation = location.pathname === '/exhibitions/transformation';
  const isCommonGround = location.pathname === '/exhibitions/common-ground' || isRootExhibitions;

  let activeKey = 'common-ground';
  if (isOrderedChaos) activeKey = 'ordered-chaos';
  if (isTransformation) activeKey = 'transformation';

  const videos = EXHIBITION_VIDEOS[activeKey] || [];

  return (
    <div id="cat_main">
      <div id="cat_left">
        <div className="pt-7">
          <ul className="cat-list">
            <li>
              <Link to="/exhibitions/common-ground" className={isCommonGround ? 'active' : ''}>
                COMMON GROUND
              </Link>
            </li>
            <li>
              <Link to="/exhibitions/ordered-chaos" className={isOrderedChaos ? 'active' : ''}>
                ORDERED CHAOS
              </Link>
            </li>
            <li>
              <Link to="/exhibitions/transformation" className={isTransformation ? 'active' : ''}>
                TRANSFORMATION
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="cat_right" className="flex-1">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', paddingTop: '20px', width: '100%', maxWidth: '800px' }}>
          {videos.map((url, idx) => (
            <div key={idx} style={{ width: '100%', aspectRatio: '16 / 9' }}>
              <iframe
                src={url}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
