import React, { useState } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="thumb-obj w-full max-w-[220px]">
      <button
        type="button"
        className="thumb-frame w-full"
        onClick={() => !hasError && onExpand(index)}
        disabled={hasError}
        aria-label={art.title ? `Open ${art.title}` : "Open artwork"}
      >
        {hasError ? (
          <div className="thumb-fallback">IMAGE UNAVAILABLE</div>
        ) : (
          <img
            src={art.imageUrl}
            alt={art.title ? `${art.title} by Jesus Carveros` : 'Artwork by Jesus Carveros'}
            className={`thumb-img${isLoaded ? ' is-loaded' : ''}`}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 480px) calc(50vw - 24px), 220px"
            width={220}
            height={220}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}
      </button>
    </div>
  );
};

export default GalleryItem;

