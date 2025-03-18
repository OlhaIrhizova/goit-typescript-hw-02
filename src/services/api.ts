import axios from "axios";
import { Image } from "../components/app/App.types";
import { FetchImagesResponse } from "../components/app/App.types";





const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'tuxhfwBarwry8iPkSQWTJYPci2pVrON8IAd8LXH2z2k';

export const fetchImages = async (query:string, page:number = 1): Promise<Image[]> => {

  const response = await  axios.get<FetchImagesResponse>(API_URL,{
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
 
  return response.data.results;

};
  

