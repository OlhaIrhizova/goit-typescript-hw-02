import { useEffect, useState,  } from "react";
import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery"
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import ImageModal from "../imageModal/ImageModal";
import Modal from 'react-modal';
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";
import { fetchImages } from "../../services/api";
import { Image } from "./App.types";


Modal.setAppElement("#root");



const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image|null>(null);
 
  
  
 useEffect(() => {

  if (!query) return;
  
  const getData = async () => {
  
  try {
  setIsLoading(true);
  setIsError(false);
  const results = await fetchImages(query, page);
  setImages(prev => [...prev, ...results]);

  }catch{
    setIsError(true);
  }

  finally {
    setIsLoading(false)
  };
  
  }
  getData()
  },[query,page]);

  const handleSearch = (newQuery:string) => {
    setQuery(newQuery);
    setImages([]); 
    setPage(1);
  };

  const openModal = (image:Image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  };
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null);
  };
    

  return (
    <div>
      <SearchBar onSubmit={handleSearch}/>
      {isLoading && images.length === 0 && <Loader />}
      {isError && <ErrorMessage/>}
      <ImageGallery images={images} isLoading={isLoading} isError={isError} onImageClick={openModal}/>
      {images.length > 0 && !isError && (
  isLoading ? <Loader /> : <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />)}
      <ImageModal isOpen ={isModalOpen} onClose={closeModal} image={selectedImage ? selectedImage.urls.regular : null}/>
     
    </div>
  )

}


export default App;