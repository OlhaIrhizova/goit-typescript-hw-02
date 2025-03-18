
import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css"
import { ImageGalleryProps } from "../app/App.types";


const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) => {
    return (
        
            <div className={css.container}>
              <ul className={css.gallery}>
              {images.map((image) => (
                <li key={image.id}  className={css.galleryItem}>
                  <ImageCard 
                  image={image} 
                  onClick={()=> onImageClick(image)} 
                 />
                </li>
              ))}
            </ul>
            
            </div>

          );
        };
	


    


export default ImageGallery;


    
       


    