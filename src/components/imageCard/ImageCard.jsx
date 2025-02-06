const ImageCard = ({image, onClick}) => {
    return(
        <div onClick={() => onClick(image.urls.regular)}>
  <img 
  src = {image.urls.small}
  alt = {image.alt_description}  
  />
</div>

    )
}
export default ImageCard;