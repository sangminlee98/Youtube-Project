import React from 'react';
import Video from './video';

const Videos = (props) => {
    return (
        <ul className="thumbnailContainer">
            {
                props.video.map(item=> {
                    return <Video
                    video={item}
                    key={item.id}/>
                })
            }
        </ul>
    )  
};

export default Videos;