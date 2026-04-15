import React, { useState, useEffect } from 'react';
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
    <button
      type="button"
      aria-label={`Play ${title}`}
      onClick={() => setIsPlaying(true)}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#000',
        border: 'none',
        padding: 0,
        display: 'block'
      }}
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
    </button>
  );
};

const Exhibitions: React.FC = () => {
  useEffect(() => {
    document.title = 'Exhibitions — Jesus Carveros';
  }, []);

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
        <h1 className="sr-only">Exhibitions</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            paddingTop: '20px',
            width: '100%',
            boxSizing: 'border-box',
            paddingLeft: '0',
            paddingRight: '0',
          }}
        >
          {videos.map((videoId, idx) => (
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