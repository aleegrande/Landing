import React from 'react'
import YouTube from 'react-youtube';


class Video extends React.Component {
    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(0);
    }
    render() {
        const opts = {
            height: '665px',
            width: '100%',
            playerVars: {
                autoplay: 1,
            },
        };

        return <YouTube videoId="BGhJaEmmFxE" opts={opts} onReady={this.VideoOnReady} />;
    }
    
}

export default Video;
