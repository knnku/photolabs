import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favedPhotos, setFavedPhotos] = useState(0);
  const [photoModal, showPhotoModal] = useState(false);
  const [modalData, passModalData] = useState(null);

  // Modal Handler: show modal via state and receive data from photolist child
  const togglePhotoModal = (modalData) => {
    showPhotoModal(!photoModal);

    passModalData(modalData);
  };

  return (
    <div className="App">
      <HomeRoute
        togglePhotoModal={togglePhotoModal}
        favedPhotos={favedPhotos}
        setFavedPhotos={setFavedPhotos}
      />

      {photoModal && (
        <PhotoDetailsModal
          togglePhotoModal={togglePhotoModal}
          photoData={modalData}
          favedPhotos={favedPhotos}
          setFavedPhotos={setFavedPhotos}
        />
      )}
    </div>
  );
};

export default App;
