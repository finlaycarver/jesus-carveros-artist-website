import React, { useEffect, useRef } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose, onPrev, onNext }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;

    const closeBtn = overlayRef.current?.querySelector<HTMLElement>('.lb-close-btn');
    closeBtn?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus.current?.focus();
    };
  }, []);

  return (
    <div ref={overlayRef} className="modal-overlay" onClick={onClose}>
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
