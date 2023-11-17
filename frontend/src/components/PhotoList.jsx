import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleModal, favedPhotos, favePhoto, similarPhotos }) => {

  const photoArray = similarPhotos ? Object.values(similarPhotos) : photos;

  return (
    <ul className="photo-list">
      {photoArray.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photoId={photo.id}
            city={photo.location.city}
            country={photo.location.country}
            imageSource={photo.urls.regular}
            userName={photo.user.username}
            profile={photo.user.profile}
            similarPhotos={photo.similar_photos}
            toggleModal={toggleModal}
            favedPhotos={favedPhotos}
            favePhoto={favePhoto}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
