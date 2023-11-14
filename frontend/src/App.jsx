import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {


  const {
    useFavePhotos,
    useToggleModal,
    useModalData
  } = useApplicationData();

  const { favedPhotos, toggleFave } = useFavePhotos();
  const { photoModal, togglePhotoModal } = useToggleModal();
  const { photoData, passModalData } = useModalData();

  const toggleModal = (modalData) => {
    togglePhotoModal();

    passModalData(modalData);
  };

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        favedPhotos={favedPhotos}
        toggleFave={toggleFave}
      />

      {photoModal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          photoData={photoData}
          favedPhotos={favedPhotos}
          toggleFave={toggleFave}
        />
      )}
    </div>
  );
};

export default App;
