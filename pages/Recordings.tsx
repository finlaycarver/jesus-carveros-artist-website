import React from 'react';
import { MOCK_RECORDINGS } from '../constants';

const Recordings: React.FC = () => {
  return (
    <div id="cat_main">
      <div id="cat_left">
        {/* Empty cat_left to maintain layout system without sub-navigation */}
      </div>

      <div id="cat_right" className="flex-1">
        <div className="max-w-[800px] w-full flex flex-col gap-10 pb-20">
          {MOCK_RECORDINGS.map((rec) => (
            <div key={rec.id} className="w-full">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(rec.soundcloudUrl)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recordings;