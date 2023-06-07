import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from "./css/styles..module.css"
// import { prettyFormat } from '@testing-library/react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [searchQuery, page]);

  const fetchImages = async () => {
    if (searchQuery === '') return;

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=36279909-cfd4bce87e67b5b9044183ce0&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.hits]);
      setTotalHits(data.totalHits);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setTotalHits(0);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  const showLoadMoreButton = images.length > 0 && !isLoading && totalHits > page * 12;

    return (
      <div className={s.App}>
        <Searchbar onSubmitHandler={handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {isLoading && <Loader />}
			{images.length > 0 && !isLoading}
          {showLoadMoreButton && <Button onClick={handleLoadMore} />}
        
        {selectedImage && (
          <Modal imageUrl={selectedImage.largeImageURL} onClose={handleModalClose} />
        )} 
      </div>
    );
}

export default App;