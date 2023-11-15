import React from "react";

import "../styles/HomeRoute.scss";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ toggleModal, favedPhotos, favePhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList
        toggleModal={toggleModal}
        favedPhotos={favedPhotos}
        favePhoto={favePhoto}
      />
    </div>
  );
};

export default HomeRoute;
