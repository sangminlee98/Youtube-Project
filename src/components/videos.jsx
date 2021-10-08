import React from 'react';
import Video from './video';
import styles from './videos.module.css';

const Videos = ({videos, onVideoClick, display}) => {
    return (
        <ul className={styles.videos}>
            {
                videos.map(video=> {
                    return <Video
                    video={video}
                    key={video.id}
                    onVideoClick={onVideoClick}
                    display={display}/>
                })
            }
        </ul>
    )  
};

export default Videos;