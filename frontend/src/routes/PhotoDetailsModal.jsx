import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  favedPhotos,
  favePhoto,
  toggleModal,
  modalData,
}) => {
  //Close photomodal by calling modal state handler
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
            photoId={modalData.photoId}
            favedPhotos={favedPhotos}
            favePhoto={favePhoto}
          />
          <img
            className="photo-details-modal__image"
            src={modalData.imageSource}
          />
        </div>
        <footer className="photo-details-modal__header photo-details-modal__photographer-details ">
          <img
            src={modalData.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <span>{modalData.userName}</span>
            <div className="photo-details-modal__photographer-location">{`${modalData.city}, ${modalData.country}`}</div>
          </div>
        </footer>
      </div>
      <h2 className="photo-details-modal__images">Similar Photos</h2>
      <div>
        <PhotoList
          toggleModal={toggleModal}
          similarPhotos={modalData.similarPhotos}
          photoId={modalData.photoId}
          favedPhotos={favedPhotos}
          favePhoto={favePhoto}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
