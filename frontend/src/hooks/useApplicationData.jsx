import { useState } from "react";

//Global state array to contain favedphotos

const useApplicationData = () => {
  // Favephotos handler
  const useFavePhotos = () => {
    const [favedPhotos, setFavedPhotos] = useState([]);

    const toggleFave = (photoId) => {
      setFavedPhotos((prevFaves) => {
        if (prevFaves.includes(photoId)) {
          return prevFaves.filter((id) => id !== photoId);
        } else {
          return [...prevFaves, photoId];
        }
      });
    };

    return {
      favedPhotos,
      toggleFave,
    };
  };

  // Modal display state function handler
  const useToggleModal = () => {
    const [photoModal, showPhotoModal] = useState(false);

    // Modal Handler show modal via state
    const togglePhotoModal = () => {
      showPhotoModal(!photoModal);
    };

    return {
      photoModal,
      togglePhotoModal,
    };
  };

  const useModalData = () => {
    const [photoData, passModalData] = useState(null);

    return {
      photoData,
      passModalData,
    };
  };

  return {
    useFavePhotos,
    useToggleModal,
    useModalData,
  };
};

export default useApplicationData;
