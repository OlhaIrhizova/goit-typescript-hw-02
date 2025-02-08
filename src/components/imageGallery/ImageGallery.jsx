
import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css"


const ImageGallery = ({images, onImageClick}) => {
    return (
        
            <div className={css.container}>
              <ul className={css.gallery}>
              {images.map((image) => (
                <li key={image.id}  className={css.galleryItem}>
                  <ImageCard 
                  image={image} 
                  alt = {image.description} 
                  onClick={()=> onImageClick(image.urls.regular)} 
                 />
                </li>
              ))}
            </ul>
            
            </div>

          );
        };
	


    


export default ImageGallery;


    
       


    