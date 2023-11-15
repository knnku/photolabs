import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {


  const {
    favedPhotos,
    favePhoto,
    photoModal,
    togglePhotoModal,
    modalData,
    passModalData
  } = useApplicationData();

  // const { photoModal, togglePhotoModal } = useToggleModal();
  // const { photoData, passModalData } = useModalData();

  const toggleModal = (photoData) => {
    togglePhotoModal();

    passModalData(photoData);
  };

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        favedPhotos={favedPhotos}
        favePhoto={favePhoto}
      />

      {photoModal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          modalData={modalData}
          favedPhotos={favedPhotos}
          favePhoto={favePhoto}
        />
      )}
    </div>
  );
};

export default App;
