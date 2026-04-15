import React, { useState, useEffect } from 'react';

const FILM_VIDEOS: string[] = [
  'pdyUuBfRrCw',
  'VN-2wWdMx2k',
  'ixAvgIqtxFY'
];

const BLOB_VIDEO =
  'https://q5uere11mbgam1g1.public.blob.vercel-storage.com/films/Submission.mp4';

const BLOB_VIDEO_POSTER =
  'https://q5uere11mbgam1g1.public.blob.vercel-storage.com/films/submission-thumb.jpg';

const VideoEmbed: React.FC<{ videoId?: string; blobVideo?: string; poster?: string }> = ({
  videoId,
  blobVideo,
  poster
}) => {
  const [play, setPlay] = useState(false);

  return (
    <button
      type="button"
      aria-label="Play video"
      onClick={() => !play && setPlay(true)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: '16 / 9',
        cursor: 'pointer',
        overflow: 'hidden',
        background: '#000',
        border: 'none',
        padding: 0,
        display: 'block'
      }}
    >
      {play ? (
        blobVideo ? (
          <video
            controls
            autoPlay
            preload="metadata"
            playsInline
            poster={poster}
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
            title={videoId}
          />
        )
      ) : (
        <>
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
        </>
      )}
    </button>
  );
};

const Films: React.FC = () => {
  useEffect(() => {
    document.title = 'Films — Jesus Carveros';
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left"></div>
      <div id="cat_right">
        <h1 className="sr-only">Films</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            paddingTop: '40px',
            width: '100%',
            boxSizing: 'border-box',
            paddingLeft: '0',
            paddingRight: '0',
          }}
        >
          {FILM_VIDEOS.map((id, idx) => (
            <VideoEmbed key={idx} videoId={id} />
          ))}

          <VideoEmbed
            blobVideo={BLOB_VIDEO}
            poster={BLOB_VIDEO_POSTER}
          />
        </div>
      </div>
    </div>
  );
};

export default Films;