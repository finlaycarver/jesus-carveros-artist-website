import React from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose, onPrev, onNext }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="lb-close-btn"
        aria-label="Close image viewer"
      >&times;</button>
      <button className="lb-nav-btn prev" aria-label="Previous image" onClick={onPrev}>&lsaquo;</button>
      <button className="lb-nav-btn next" aria-label="Next image" onClick={onNext}>&rsaquo;</button>
      <div className="modal-content relative" onClick={(e) => e.stopPropagation()}>
        <img key={imageUrl} src={imageUrl} alt="Expanded view" className="shadow-2xl" />
        <div className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
          Arrows to navigate • ESC to close
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
