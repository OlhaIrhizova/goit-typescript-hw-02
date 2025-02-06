import axios from "axios";


const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'tuxhfwBarwry8iPkSQWTJYPci2pVrON8IAd8LXH2z2k';

export const fetchImages = async (query, page = 1) => {

  const response = await  axios.get(API_URL,{
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
 
  return response.data;

};
  

