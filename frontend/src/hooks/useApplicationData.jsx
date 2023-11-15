import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO: "FAV_PHOTO",
  SHOW_MODAL: "SHOW_MODAL",
  PASS_MODAL_DATA: "PASS_MODAL_DATA",
};

const initialStates = {
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
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialStates);

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
    favedPhotos: state.favedPhotos,
    favePhoto,
    photoModal: state.photoModal,
    togglePhotoModal,
    modalData: state.modalData,
    passModalData
  };
};

export default useApplicationData;
