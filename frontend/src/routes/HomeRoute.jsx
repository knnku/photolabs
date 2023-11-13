import React from "react";

import "../styles/HomeRoute.scss";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  togglePhotoModal,
  favedPhotos,
  setFavedPhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList
        togglePhotoModal={togglePhotoModal}
        favedPhotos={favedPhotos}
        setFavedPhotos={setFavedPhotos}
      />
    </div>
  );
};

export default HomeRoute;
