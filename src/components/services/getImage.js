// const BASE_URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
// const API_KEY = 'f36279909-cfd4bce87e67b5b9044183ce0'
import axios from 'axios';

axios.default.baseURL = 'https://pixabay.com/api/?';

export const getImage = async (query, page) => {
	const images = await axios({
		params: {
			q: query,
			page,
			key: 'f36279909-cfd4bce87e67b5b9044183ce0',
			image_type: 'photo',
			safesearch: true,
			per_page: 12,
		}
	});

	return images.data;
}