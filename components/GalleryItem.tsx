import React, { useState } from 'react';

interface GalleryItemProps {
  art: {
    id: string;
    title: string;
    year: string;
    medium?: string;
    dimensions?: string;
    imageUrl: string;
  };
  index: number;
  onExpand: (index: number) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ art, index, onExpand }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="thumb-obj w-full max-w-[220px]">
      <div 
        className="thumb-frame" 
        onClick={() => !hasError && onExpand(index)}
      >
        {hasError ? (
          <div className="thumb-fallback">
            IMAGE UNAVAILABLE
          </div>
        ) : (
          <img 
            src={art.imageUrl} 
            alt={art.title || 'Artwork'} 
            className="thumb-img"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryItem;