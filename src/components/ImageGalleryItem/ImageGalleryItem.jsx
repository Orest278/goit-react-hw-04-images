import React, {useState} from 'react';
// import s from '../css/styles..modulecss'
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types'

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

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem