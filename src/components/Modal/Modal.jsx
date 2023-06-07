import { useEffect, useCallback } from 'react';
import s from '../css/styles..module.css';

export const Modal = ({ modalImage, closeModal }) => {
  const closeByBackdrop = useCallback((event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [closeByBackdrop, closeModal]);

  return (
    <div className={s.Overlay} onClick={closeByBackdrop}>
      <div className={s.Modal}>
        <img src={modalImage.src} alt={modalImage.alt} />
      </div>
    </div>
  );
};

export default Modal;