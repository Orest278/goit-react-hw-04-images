// import { Component } from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import s from "../css/styles..module.css"
import PropTypes from 'prop-types'

const ImageGallery =({images, onImageClick}) => {
		return (
			<ul className={s.ImageGallery}>
			{images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
		</ul>
		)
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery