import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from "./css/styles..module.css"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      images: [],
      selectedImage: null,
      page: 1,
		isLoading: false,
	  totalHits: 0,
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    if (searchQuery === '') return;

    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=36279909-cfd4bce87e67b5b9044183ce0&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      this.setState((prevState) => ({
		  images: [...prevState.images, ...data.hits],
		  totalHits: data.totalHits,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
		page: 1,
	  totalHits: 0,
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  handleModalClose = () => {
    this.setState({ selectedImage: null });
  };

  render() {
	  const { images, isLoading, selectedImage, totalHits, page } = this.state;
	  const showLoadMoreButton = images.length > 0 && !isLoading && totalHits > page*12

    return (
      <div className={s.App}>
        <Searchbar onSubmitHandler={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
			{images.length > 0 && !isLoading}
          {showLoadMoreButton && <Button onClick={this.handleLoadMore} />}
        
        {selectedImage && (
          <Modal imageUrl={selectedImage.largeImageURL} onClose={this.handleModalClose} />
        )} 
      </div>
    );
  }
}

export default App;