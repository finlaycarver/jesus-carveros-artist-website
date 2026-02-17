import React from 'react';
import { NavigationLinks } from '../App';

const Home: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] flex flex-col items-center justify-between overflow-hidden pb-12">
      {/* 
        Hero Image Container 
        - flex-1: takes up all remaining space
        - pt-2: minimal gap from the 60px body padding
      */}
      <div className="w-full flex-1 flex items-center justify-center px-6 md:px-20 pt-2 overflow-hidden">
        <img 
          src="https://q5uere11mbgam1g1.public.blob.vercel-storage.com/home-page/1d3fb49a-02b5-4bc8-8046-85671f2a4a21%20%281%29.jpeg" 
          alt="Hero Artwork" 
          className="max-w-full max-h-full object-contain block"
        />
      </div>

      {/* 
        Navigation Menu 
        - shrink-0: ensures it doesn't get compressed
        - py-10: standard padding to clear the bottom of the viewport
      */}
      <div className="w-full shrink-0 py-10">
        <NavigationLinks />
      </div>
    </div>
  );
};

export default Home;