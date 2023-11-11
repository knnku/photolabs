import React, { useState } from "react";

import "../styles/HomeRoute.scss";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ togglePhotoModal }) => {
  const [favedPhotos, setFavedPhotos] = useState(0);

  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList togglePhotoModal={togglePhotoModal} setFavedPhotos={setFavedPhotos} favedPhotos={favedPhotos} />
    </div>
  );
};

export default HomeRoute;
