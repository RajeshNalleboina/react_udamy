import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const videoList = videos.map((data) => {
    return (
      <VideoItem
        key={data.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={data}
      />
    );
  });
  return <div className="ui relaxrd divided list">{videoList}</div>;
};

export default VideoList;
