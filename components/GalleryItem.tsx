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
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              overflow: "hidden",
            }}
          >
            <img
              src={art.imageUrl}
              alt={art.title || "Artwork"}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // ✅ fills grid square
                objectPosition: "center",
                display: "block",
              }}
              onError={() => setHasError(true)}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default GalleryItem;

