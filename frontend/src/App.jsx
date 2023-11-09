import React from "react";

// import PhotoListItem from "./components/PhotoListItem";
import TopNavigationBar from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      {/* {Array.from(Array(3)).map((_, index) => (
        <PhotoListItem key={index} />
      ))} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
