import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ photos, toggleModal, favedPhotos, favePhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList
        photos={photos}
        toggleModal={toggleModal}
        favedPhotos={favedPhotos}
        favePhoto={favePhoto}
      />
    </div>
  );
};

export default HomeRoute;
