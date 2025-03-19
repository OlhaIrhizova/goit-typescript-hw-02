import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageModalProps } from '../app/App.types';


const ImageModal:React.FC<ImageModalProps> = ({isOpen, onClose, image}) => {
   
return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      contentLabel="Image Modal"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
     {image && <img src={image} alt="Large" className={css.modalImage} />}
     
    </Modal>
)
}
export default ImageModal;