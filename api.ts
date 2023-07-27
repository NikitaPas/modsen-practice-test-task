import axios from "axios";

const API_KEY = "AIzaSyA8IxJfMAVLOl4IENrl_n8K-qYVUCGbqbw";
const results = 'maxResults=40';

export const searchBooks = (query: string, category: string, orderBy: string): Promise<any[]> => {
  const encodedCategory = encodeURIComponent(category);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&${results}&printType=books&subject:${encodedCategory}&orderBy=${orderBy}`;
  
  return axios
    .get(url)
    .then((response) => {
      const books = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks?.thumbnail,
        categories: item.volumeInfo.categories,
        publishedDate: item.volumeInfo.publishedDate,
      }));
      return books;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};