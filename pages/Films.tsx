import React from 'react';

const FILM_VIDEOS: string[] = [
  'https://www.youtube.com/embed/pdyUuBfRrCw',
  'https://www.youtube.com/embed/VN-2wWdMx2k',
  'https://www.youtube.com/embed/ixAvgIqtxFY',
];

const Films: React.FC = () => {
  return (
    <div id="cat_main">
      <div id="cat_right" className="flex-1">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', paddingTop: '20px', width: '100%', maxWidth: '800px' }}>
          {FILM_VIDEOS.map((url, idx) => (
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

export default Films;