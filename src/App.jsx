import { useEffect, useState,  } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import Modal from 'react-modal';
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Loader from "./components/loader/Loader";


Modal.setAppElement("#root");



const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
 
  
  
 useEffect(() => {

  if (!query) return;
  
  const getData = async () => {
  
  try {
  setIsLoading(true);
  setIsError(false);
  const {results} = await fetchImages(query, page);
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

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]); 
    setPage(1);
  };

  const openModal = (image) => {
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
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      <ImageGallery images={images} isLoading={isLoading} isError={isError} onImageClick={openModal}/>
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />}
      <ImageModal isOpen ={isModalOpen} onClose={closeModal} image={selectedImage}/>
     
    </div>
  )

}

export default App;