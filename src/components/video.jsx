import React from 'react';

const Video = (props) => {
    return(
        <li className="thumbnail">
            <span>{props.video.name}</span>
            <span>{props.video.count}</span>
        </li>
    );    
}

export default Video;