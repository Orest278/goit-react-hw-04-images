import React, {useState} from 'react';
// import s from '../css/styles..modulecss'
import Modal from 'components/Modal/Modal';

export const ImageGalleryItem = ({image}) => {
  const[isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen( true );
  };

  const closeModal = () => {
    setIsModalOpen( false );
  };

    return (
      <div className="image-gallery-item">
        <img src={image.webformatURL} alt={image.alt} onClick={openModal} />

        {isModalOpen && (
          <Modal
            modalImage={{ src: image.largeImageURL , alt: image.alt }}
            closeModal={closeModal}
          />
        )}
      </div>
    );
}

export default ImageGalleryItem