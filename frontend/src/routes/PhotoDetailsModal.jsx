import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  toggleModal,
  photoData,
  favedPhotos,
  toggleFave,
}) => {
  //Close photomodal by running same function reversing state/boolean
  const handleClickPhotoModal = () => {
    toggleModal();
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
      <div className="photo-details-modal__top-bar ">
        <div className="photo-details-modal__images">
          <PhotoFavButton
            photoId={photoData.photoId}
            favedPhotos={favedPhotos}
            toggleFave={toggleFave}
          />
          <img
            className="photo-details-modal__image"
            src={photoData.imageSource}
          />
        </div>
        <footer className="photo-details-modal__header photo-details-modal__photographer-details ">
          <img
            src={photoData.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{photoData.userName}</span>
            <div className="photo-details-modal__photographer-location">{`${photoData.city}, ${photoData.country}`}</div>
          </div>
        </footer>
      </div>
      <h2 className="photo-details-modal__images">Similar Photos</h2>
      <div>
        <PhotoList favedPhotos={favedPhotos} toggleFave={toggleFave} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
