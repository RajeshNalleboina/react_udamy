import React from "react";
import SearchBar from "./SearchBar";
import YouTubeApi from "./api/YouTubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class YouTube extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmitForm("tractors");
  }

  onSubmitForm = async (searchData) => {
    const videosData = await YouTubeApi.get("/search", {
      params: {
        q: searchData,
      },
    });
    this.setState({
      videos: videosData.data.items,
      selectedVideo: videosData.data.items[0],
    });
  };

  onSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
    console.log("slectedVideo", selectedVideo);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectedVideo={this.onSelectedVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YouTube;
