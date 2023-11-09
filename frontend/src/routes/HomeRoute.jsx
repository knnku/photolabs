import React from 'react';

import '../styles/HomeRoute.scss';

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      {/* {Array.from(Array(3)).map((_, index) => (
        <PhotoListItem key={index} />
      ))} */}

      <PhotoList />
    </div>
  );
};

export default HomeRoute;
