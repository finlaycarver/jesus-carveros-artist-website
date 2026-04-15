import React, { useEffect } from 'react';
import { MOCK_RECORDINGS } from '../constants';

const Recordings: React.FC = () => {
  useEffect(() => {
    document.title = 'Recordings — Jesus Carveros';
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left"></div>
      <div id="cat_right" className="flex-1">
        <h1 className="sr-only">Recordings</h1>
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
            paddingLeft: '0',
            paddingRight: '0',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {MOCK_RECORDINGS.map((recording) => (
            <div
              key={recording.id}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: '#f3f3f3',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                {recording.title}
              </div>

              <audio
                controls
                preload="metadata"
                style={{
                  width: '100%',
                  display: 'block',
                }}
              >
                <source src={recording.audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recordings;