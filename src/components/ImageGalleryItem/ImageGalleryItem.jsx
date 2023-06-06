import React from 'react';
// import s from '../css/styles..modulecss'
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

// const ImageGalleryItem = ({ image, onImageClick }) => {
//   const handleClick = () => {
//     onImageClick(image);
//   };

//   return (
//     <li className={s.galleryItem} onClick={handleClick}>
//       <img className={s.galleryItem} src={image.webformatURL} alt="" />
//     </li>
//   );
// };

// export default ImageGalleryItem;
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div className="image-gallery-item">
        <img src={image.webformatURL} alt={image.alt} onClick={this.openModal} />

        {isModalOpen && (
          <Modal
            modalImage={{ src: image.largeImageURL , alt: image.alt }}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGalleryItem