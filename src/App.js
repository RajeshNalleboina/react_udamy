import React from "react";
import faker from "@faker-js/faker";
import CommentApp from "./CommentApp";
import Seasons from "./Seasons";
import PicsDirectory from "./PicsDirectory";
import YouTube from "./YouTube";
// hooks
import AdvancedHook from "./AdvancedHook";
import YouTubeHook from "./Videos_Hooks";

const App = () => {
  return (
    <div>
      {/* <CommentApp /> */}
      {/* <Seasons /> */}
      {/* <PicsDirectory /> */}
      {/* <YouTube /> */}
      {/* <AdvancedHook /> */}
      <YouTubeHook />
    </div>
  );
};

export default App;
