import React, { useState } from 'react';

interface VideoEmbedProps {
  videoId?: string;
  blobVideo?: string;
  poster?: string;
  title?: string;
}

const FRAME_STYLE: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  background: '#000'
};

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, blobVideo, poster, title }) => {
  const [play, setPlay] = useState(false);
  const label = title ?? videoId ?? 'video';

  if (play) {
    return (
      <div style={FRAME_STYLE}>
        {blobVideo ? (
          <video
            controls
            autoPlay
            preload="metadata"
            playsInline
            poster={poster}
            aria-label={label}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              background: '#000'
            }}
          >
            <source src={blobVideo} type="video/mp4" />
          </video>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={label}
          />
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play ${label}`}
      onClick={() => setPlay(true)}
      style={{
        ...FRAME_STYLE,
        cursor: 'pointer',
        border: 'none',
        padding: 0,
        display: 'block'
      }}
    >
      <img
        src={
          blobVideo && poster
            ? poster
            : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        }
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
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
    </button>
  );
};

export default VideoEmbed;
