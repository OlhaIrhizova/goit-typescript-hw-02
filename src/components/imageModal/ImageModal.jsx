import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({isOpen, onClose, image}) => {
   
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