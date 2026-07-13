import React, { useEffect } from 'react';
import { NavigationLinks } from '../components/NavigationLinks';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Jesus Carveros — Portfolio';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full h-[100dvh] md:h-[calc(100vh-60px)] flex flex-col items-center justify-center md:justify-between overflow-hidden gap-8 py-6 md:gap-0 md:py-0 md:pb-12">
      {/*
        Hero Image Container
        - md:flex-1: takes up all remaining space on desktop only.
          On mobile the container sizes to the image itself, since the
          image is naturally portrait and far shorter than the viewport —
          forcing it to fill the remaining space left a large empty gap
          before the nav.
        - pt-2: minimal gap from the 60px body padding (desktop only)
      */}
      <div className="w-full flex items-center justify-center px-6 md:px-20 md:flex-1 md:pt-2 overflow-hidden">
        <img
          src="https://q5uere11mbgam1g1.public.blob.vercel-storage.com/home-page/1d3fb49a-02b5-4bc8-8046-85671f2a4a21%20%281%29.jpeg"
          alt="Featured artwork by Jesus Carveros"
          className="max-w-full max-h-[55vh] md:max-h-full object-contain block"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) calc(100vw - 160px), 900px"
        />
      </div>

      {/*
        Navigation Menu
        - shrink-0: ensures it doesn't get compressed
        - md:py-10: standard padding to clear the bottom of the viewport (desktop only)
      */}
      <div className="w-full shrink-0 md:py-10">
        <NavigationLinks />
      </div>
    </div>
  );
};

export default Home;