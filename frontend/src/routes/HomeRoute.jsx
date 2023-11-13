import React from "react";

import "../styles/HomeRoute.scss";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ showPhotoModal, favedPhotos, toggleFave }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList
        showPhotoModal={showPhotoModal}
        favedPhotos={favedPhotos}
        toggleFave={toggleFave}
      />
    </div>
  );
};

export default HomeRoute;
