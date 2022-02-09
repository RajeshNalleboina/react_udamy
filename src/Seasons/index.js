import React, { useState, useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const Seasons = () => {
//   const [latitude, setLatitude] = useState();
//   const [longitude, setLongitude] = useState();

//   useEffect(() => {
//     // get geolocation
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.latitude);
//         setLongitude(position.longitude);
//         console.log("*** Position", position);
//       },
//       (err) => {
//         console.log("*** err", err);
//       }
//     );
//   },[]);
//   return (
//     <div>
//       <h1>Seasons</h1>
//     </div>
//   );
// };

class Seasons extends React.Component {
  state = { latitude: "", longitude: "", errorMessage: "" };
  componentDidMount() {
    // get geolocation
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Latitude: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          {" "}
          <SeasonDisplay lat={this.state.latitude} />
        </div>
      );
    }
    return <Spinner message="Please enable the location" />;
  };
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default Seasons;
