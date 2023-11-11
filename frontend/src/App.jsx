import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "./mocks/photos.js";



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoModal, showPhotoModal] = useState(false);

  const togglePhotoModal = () => {
    showPhotoModal(!photoModal);
  };
  return (
    <div className="App">
      <HomeRoute togglePhotoModal={togglePhotoModal} />

      {photoModal && <PhotoDetailsModal togglePhotoModal={togglePhotoModal} />}
    </div>
  );
};

export default App;
