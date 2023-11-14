import React from "react";

import "../styles/HomeRoute.scss";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ toggleModal, favedPhotos, toggleFave }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />

      <PhotoList
        toggleModal={toggleModal}
        favedPhotos={favedPhotos}
        toggleFave={toggleFave}
      />
    </div>
  );
};

export default HomeRoute;
