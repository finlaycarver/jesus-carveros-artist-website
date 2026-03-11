import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EXHIBITION_VIDEOS: Record<string, string[]> = {
  'common-ground': [
    'https://player.vimeo.com/video/1172572822?title=0&byline=0&portrait=0&badge=0',
  ],
  'ordered-chaos': [
    'https://player.vimeo.com/video/1172590149?title=0&byline=0&portrait=0&badge=0',,
  ],
  'transformation': [
    'https://player.vimeo.com/video/1172584678?title=0&byline=0&portrait=0&badge=0',
  ],
};

const Exhibitions: React.FC = () => {
  const location = useLocation();

  const isRootExhibitions = location.pathname === '/exhibitions';
  const isOrderedChaos = location.pathname === '/exhibitions/ordered-chaos';
  const isTransformation = location.pathname === '/exhibitions/transformation';
  const isCommonGround =
    location.pathname === '/exhibitions/common-ground' || isRootExhibitions;

  let activeKey = 'common-ground';
  if (isOrderedChaos) activeKey = 'ordered-chaos';
  if (isTransformation) activeKey = 'transformation';

  const videos = EXHIBITION_VIDEOS[activeKey] || [];
  const isVerticalLayout =
  activeKey === 'common-ground' ||
  activeKey === 'ordered-chaos';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            paddingTop: '20px',
            width: '100%',
            transform: 'translateX(-75px)',
          }}
        >
          {videos.map((url, idx) => (
            <div
              key={idx}
              style={
                isVerticalLayout
                  ? {
                      height: '85vh',
                      width: 'min(calc(85vh * 9 / 16), 100%)',
                    }
                  : {
                      width: '100%',
                      maxWidth: '800px',
                      aspectRatio: '16 / 9',
                    }
              }
            >
              <iframe
                src={url}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`${activeKey}-video-${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;