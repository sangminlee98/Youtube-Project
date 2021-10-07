import React from 'react';
import Video from './video';
import styles from './videos.module.css';

const Videos = (props) => {
    return (
        <ul className={styles.videos}>
            {
                props.videos.map(video=> {
                    return <Video
                    video={video}
                    key={video.id}/>
                })
            }
        </ul>
    )  
};

export default Videos;