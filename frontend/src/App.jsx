import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photos,
    topics,
    updatePhotosByTopicId,
    favedPhotos,
    favePhoto,
    photoModal,
    togglePhotoModal,
    modalData,
    passModalData
  } = useApplicationData();
  
  const toggleModal = (photoData) => {
    togglePhotoModal();
    
    //Function handler to extract data from child list item to pass for modal
    passModalData(photoData);
  };

  return (
    <div className="App">
      <HomeRoute
        updatePhotosByTopicId={updatePhotosByTopicId}
        topics={topics}
        photos={photos}
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
