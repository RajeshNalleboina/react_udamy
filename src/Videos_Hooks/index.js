import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import YouTubeApi from "./api/YouTubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

const YouTubeHook = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    onSubmitForm("tractors");
  }, []);

  const onSubmitForm = async (searchData) => {
    const videosData = await YouTubeApi.get("/search", {
      params: {
        q: searchData,
      },
    });
    setVideos(videosData.data.items);
    setSelectedVideo(videosData.data.items[0]);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSubmitForm} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onSelectedVideo={(e) => setSelectedVideo(e)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeHook;
