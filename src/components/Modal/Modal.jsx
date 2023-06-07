import { useEffect } from 'react';
import s from '../css/styles..module.css'

export const Modal = ({modalImage, closeModal}) => {
  const closeByEscape = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeByBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeByEscape);
    
    return () => {
    window.removeEventListener('keydown', closeByEscape);
    }
  }, [closeByEscape])



    return (
      <div className={s.Overlay} onClick={closeByBackdrop}>
        <div className={s.Modal}>
          <img src={modalImage.src} alt={modalImage.alt} />
        </div>
      </div>
    );
}

export default Modal;