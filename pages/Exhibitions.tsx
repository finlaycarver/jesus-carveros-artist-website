import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const EXHIBITION_VIDEOS: Record<string, string[]> = {
  'common-ground': ['5HyT3YN89Fk'],
  'ordered-chaos': ['RGquKeAEB_s'],
  'transformation': ['dvpWPBF4nIA'],
};

const VideoEmbed: React.FC<{
  videoId: string;
  isVertical: boolean;
  title: string;
}> = ({ videoId, isVertical, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.12)',
            }}
          >
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '18px solid black',
                  marginLeft: '4px',
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Exhibitions: React.FC = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

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
    activeKey === 'common-ground' || activeKey === 'ordered-chaos';

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
            boxSizing: 'border-box',
            paddingLeft: isMobile ? '16px' : '0',
            paddingRight: isMobile ? '16px' : '0',
            transform: isMobile ? 'none' : 'translateX(-75px)',
          }}
        >
          {videos.map((videoId, idx) => (
            <div
              key={idx}
              style={
                isVerticalLayout
                  ? isMobile
                    ? {
                        width: '92vw',
                        maxWidth: '92vw',
                        aspectRatio: '9 / 16',
                        height: 'auto',
                      }
                    : {
                        height: '85vh',
                        width: 'min(calc(85vh * 9 / 16), 100%)',
                      }
                  : isMobile
                    ? {
                        width: '92vw',
                        maxWidth: '92vw',
                        aspectRatio: '16 / 9',
                      }
                    : {
                        width: '100%',
                        maxWidth: '800px',
                        aspectRatio: '16 / 9',
                      }
              }
            >
              <VideoEmbed
                videoId={videoId}
                isVertical={isVerticalLayout}
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