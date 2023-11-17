import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO: "FAV_PHOTO",
  SHOW_MODAL: "SHOW_MODAL",
  PASS_MODAL_DATA: "PASS_MODAL_DATA",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
};

const initialStates = {
  photos: [],
  topics: [],
  favedPhotos: [],
  photoModal: false,
  modalData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
  case "FAV_PHOTO":
    if (state.favedPhotos.includes(action.payload)) {
      return {
        ...state,
        favedPhotos: state.favedPhotos.filter((id) => id !== action.payload),
      };
    } else {
      return {
        ...state,
        favedPhotos: [...state.favedPhotos, action.payload],
      };
    }
  case "SHOW_MODAL":
    return {
      ...state,
      photoModal: !state.photoModal,
    };
  case "PASS_MODAL_DATA":
    return {
      ...state,
      modalData: action.payload,
    };
  case "SET_PHOTOS_DATA":
    return {
      ...state,
      photos: action.payload,
    };
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos").then((res) => {
      res.json().then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
      });
    });
  }, []);

  // Function to handle faved photos
  const favePhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO, payload: photoId });
  };

  // Function to handle modal display state
  const togglePhotoModal = () => {
    // Modal Handler show modal via state
    dispatch({ type: ACTIONS.SHOW_MODAL });
  };

  // Hook to handle passed data state to photomodal
  const passModalData = (photoData) => {
    dispatch({ type: ACTIONS.PASS_MODAL_DATA, payload: photoData });
  };

  return {
    photos: state.photos,
    favedPhotos: state.favedPhotos,
    favePhoto,
    photoModal: state.photoModal,
    togglePhotoModal,
    modalData: state.modalData,
    passModalData,
  };
};

export default useApplicationData;
