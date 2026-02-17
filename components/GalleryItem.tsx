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

  const handleExpand = () => {
    if (!hasError) onExpand(index);
  };

  return (
    <div className="thumb-obj w-full max-w-[220px]">
      <button
        type="button"
        className="thumb-frame block w-full text-left"
        onClick={handleExpand}
        disabled={hasError}
        aria-label={art.title ? `Open ${art.title}` : "Open artwork"}
      >
        {hasError ? (
          <div className="thumb-fallback">
            IMAGE UNAVAILABLE
          </div>
        ) : (
          <img
            src={art.imageUrl}
            alt={art.title || "Artwork"}
            className="thumb-img w-full h-auto"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            width={220}
            height={275}
            style={{ aspectRatio: "4 / 5" }}
            onError={() => setHasError(true)}
          />
        )}
      </button>
    </div>
  );
};

export default GalleryItem;
