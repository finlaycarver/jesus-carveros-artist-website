import React, { useState } from 'react';

const FILM_VIDEOS: string[] = [
  'pdyUuBfRrCw',
  'VN-2wWdMx2k',
  'ixAvgIqtxFY'
];

const VideoEmbed: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [play, setPlay] = useState(false);

  return (
    <div
      onClick={() => setPlay(true)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: '16 / 9',
        cursor: 'pointer',
        overflow: 'hidden',
        background: '#000'
      }}
    >
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.2)'
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '18px solid black',
                  marginLeft: '4px'
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Films: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        paddingTop: '40px',
        transform: 'translateX(133px)'
      }}
    >
      {FILM_VIDEOS.map((id, idx) => (
        <VideoEmbed key={idx} videoId={id} />
      ))}
    </div>
  );
};

export default Films;