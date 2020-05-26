import React from "react";
import videojs from "video.js";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    const videoJsOptions = {
      playbackRates: [0.5, 1, 1.5, 2],
      autoplay: false,
      controls: true,
      sources: [
        {
          src: this.props.path,
          type: "video/mp4",
        },
      ],
    };
    this.player = videojs(
      this.videoNode,
      videoJsOptions,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
