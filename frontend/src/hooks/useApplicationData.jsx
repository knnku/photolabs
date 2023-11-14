import { useState } from "react";

//Global state array to contain favedphotos

const useApplicationData = () => {
  
  // Hook to handle faved photos
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

  // Hook to handle modal display state
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

  // Hook to handle passed data state to photomodal
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
