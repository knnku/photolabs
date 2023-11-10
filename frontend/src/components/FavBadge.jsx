import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

//Hotwire to make red
const selected = true;

const FavBadge = ({ isFavPhotoExist, favedPhotos }) => {
  console.log("Current Faves:", favedPhotos);

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
      {favedPhotos ? <span>{favedPhotos}</span> : <></>}
    </div>
  );
};

export default FavBadge;
