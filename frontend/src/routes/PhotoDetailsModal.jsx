import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  togglePhotoModal,
  photoData,
  favedPhotos,
  setFavedPhotos,
}) => {
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
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={photoData.photoId}
          favedPhotos={favedPhotos}
          setFavedPhotos={setFavedPhotos}
        />
        <img
          className="photo-details-modal__image"
          src={photoData.imageSource}
        />
        <header className="photo-details-modal__header photo-details-modal__photographer-details ">
          <img
            src={photoData.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{photoData.userName}</span>
            <div className="photo-details-modal__photographer-location">{`${photoData.city}, ${photoData.country}`}</div>
          </div>
        </header>
      </div>
      <h2 className="photo-details-modal__images">Similar Photos</h2>
      <div className="photo-details-modal__top-bar">
        <PhotoList favedPhotos={favedPhotos} setFavedPhotos={setFavedPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
