import React from 'react';

const FILM_VIDEOS: string[] = [
  'https://player.vimeo.com/video/1172563980?byline=0&portrait=0&badge=0',
  'https://player.vimeo.com/video/1172568340?byline=0&portrait=0&badge=0',
  'https://player.vimeo.com/video/1172566733?byline=0&portrait=0&badge=0',
  'https://player.vimeo.com/video/1172559591?byline=0&portrait=0&badge=0'
];

const Films: React.FC = () => {
  return (
    <div id="cat_main">
      <div id="cat_right" className="flex-1">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            paddingTop: '20px',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          {FILM_VIDEOS.map((url, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                backgroundColor: '#000',
              }}
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
                title={`Film video ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Films;