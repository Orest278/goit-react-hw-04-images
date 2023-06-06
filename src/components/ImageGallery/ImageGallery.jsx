import { Component } from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import s from "../css/styles..module.css"

class ImageGallery extends Component {
	
	render() {
		const { images, onImageClick } = this.props;
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
}
export default ImageGallery