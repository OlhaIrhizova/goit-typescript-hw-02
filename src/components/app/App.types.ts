export interface Image {
    id: string,
    urls:{
      regular:string,
      small: string,
    }
    description: string,
  
  }

  export interface FetchImagesResponse {
    results: Image[];
  }


export interface AppState {
    images: Image[];
    query: string;
    isLoading: boolean;
    isError: boolean;
    page: number;
    isModalOpen: boolean;
    selectedImage: Image | null;
  }

   export interface ImageGalleryProps {
    images: Image[]; 
    onImageClick: (image:Image) => void; 
    isLoading: boolean;
    isError: boolean;
  }

  export interface ImageCardProps {
    image: Image;
    onClick: () => void;
  }

  export interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: string | null;
  }
  
  export interface LoadMoreBtnProps {
    onClick: () => void;
  }
  
  export interface SearchBarProps {
    onSubmit: (query: string) => void;
  }