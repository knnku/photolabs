import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = () => {
  const [favedPhotos, setFavedPhotos] = useState(0);

  return (
    <div className="home-route">
      <TopNavigationBar favedPhotos={favedPhotos} />
      {/* {Array.from(Array(3)).map((_, index) => (
        <PhotoListItem key={index} />
      ))} */}

      <PhotoList setFavedPhotos={setFavedPhotos} favedPhotos={favedPhotos} />
    </div>
  );
};

export default HomeRoute;
