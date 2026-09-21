import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VideoEmbed } from '../components/VideoEmbed';

interface FilmVideo {
  videoId: string;
  title: string;
}

const FILM_VIDEOS: FilmVideo[] = [
  { videoId: 'pdyUuBfRrCw', title: '"Are you going anywhere nice on holiday?" — Video installation' },
  { videoId: 'VN-2wWdMx2k', title: '"I like to dance to classical music in slow motion" — Video installation' },
  { videoId: 'ixAvgIqtxFY', title: '"I have no idea what will happen to me" — Video installation' },
];

const BLOB_VIDEO_TITLE = 'Submission';

const BLOB_VIDEO =
  'https://q5uere11mbgam1g1.public.blob.vercel-storage.com/films/Submission.mp4';

const BLOB_VIDEO_POSTER =
  'https://q5uere11mbgam1g1.public.blob.vercel-storage.com/films/submission-thumb.jpg';

const Films: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Films — Jesus Carveros';
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left">
        <div className="pt-7">
          <ul className="cat-list">
            <li>
              <Link to="/films" className={location.pathname === '/films' ? 'active' : ''}>FILMS</Link>
            </li>
            <li>
              <Link to="/films/starvecrow" className={location.pathname === '/films/starvecrow' ? 'active' : ''}>STARVECROW</Link>
            </li>
          </ul>
        </div>
      </div>
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
          {FILM_VIDEOS.map((video) => (
            <VideoEmbed key={video.videoId} videoId={video.videoId} title={video.title} />
          ))}

          <VideoEmbed
            blobVideo={BLOB_VIDEO}
            poster={BLOB_VIDEO_POSTER}
            title={BLOB_VIDEO_TITLE}
          />
        </div>
      </div>
    </div>
  );
};

export default Films;
