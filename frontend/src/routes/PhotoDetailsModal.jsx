import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ togglePhotoModal, photoData }) => {
  
  //Close photomodal by running same function reversing state/boolean
  const handleClickPhotoModal = () => {
    togglePhotoModal();

  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img
          src={closeSymbol}
          alt="close symbol"
          onClick={handleClickPhotoModal}
        />
      </button>
      <div>
        <PhotoFavButton />
        <img
          className="photo-details-modal__image"
          src={photoData.imageSource}
        />
        <header className="photo-details-modal__header">
          <img
            src={photoData.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div>
            <name>{photoData.userName}</name>
            <div className="photo-details-modal__photographer-location">{`${photoData.city}, ${photoData.country}`}</div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
