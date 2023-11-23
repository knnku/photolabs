import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO: "FAV_PHOTO",
  SHOW_MODAL: "SHOW_MODAL",
  PASS_MODAL_DATA: "PASS_MODAL_DATA",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
};

const initialStates = {
  photos: [],
  topics: [],
  topicId: 0,
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
  case "SET_TOPICS_DATA":
    return {
      ...state,
      topics: action.payload,
    };
  case "GET_PHOTOS_BY_TOPIC":
    return {
      ...state,
      topicId: action.payload,
    };
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  //Fetch photos handler
  const fetchPhotos = () =>
    fetch(`/api/photos`).then((res) => {
      res
        .json()
        .then((data) => {
          dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
        })
        .catch((err) => console.error(err));
    });

  //Fetch topics handler
  const fetchTopics = () =>
    fetch(`/api/topics`).then((res) => {
      res
        .json()
        .then((data) => {
          dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data });
        })
        .catch((err) => console.error(err));
    });

  useEffect(() => {
    //Calling data fetch handlers if topic state is default === pageload
    if (state.topicId === 0) {
      fetchPhotos();
      fetchTopics();
    }

    //Fetch photos handler called if topic state has changed from default
    if (state.topicId !== 0) {
      fetchPhotosByTopicId(state.topicId);
    }
  }, [state.topicId]);

  //Fetch photos by topics when state of topics has changed
  const fetchPhotosByTopicId = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`).then((res) => {
      res
        .json()
        .then((data) => {
          // Set photos state to specific photos from API by topic
          dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
        })
        .catch((err) => console.error(err));
    });
  };

  //Function to handle faved photos
  const favePhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO, payload: photoId });
  };

  //Function to handle modal display state
  const togglePhotoModal = () => {
    // Modal Handler show modal via state
    dispatch({ type: ACTIONS.SHOW_MODAL });
  };

  //Hook to handle passed data from photo item state to photomodal
  const passModalData = (photoData) => {
    dispatch({ type: ACTIONS.PASS_MODAL_DATA, payload: photoData });
  };

  //Handler for photos
  const updatePhotosByTopicId = (topicId) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: topicId });
  };

  return {
    photos: state.photos,
    topics: state.topics,
    updatePhotosByTopicId,
    favedPhotos: state.favedPhotos,
    favePhoto,
    photoModal: state.photoModal,
    togglePhotoModal,
    modalData: state.modalData,
    passModalData,
  };
};

export default useApplicationData;
