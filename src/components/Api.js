import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchArticlesWithQuery = async (valueApi, page) => {
  const response = await axios.get(`/?q=${valueApi}&page=${page}&key=39051306-773603199c2079818735f84a4&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data.hits;
};
