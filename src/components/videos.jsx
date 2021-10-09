import React from 'react';
import Video from './video';
import styles from './videos.module.css';

const Videos = ({videos, onVideoClick, display,loading}) => {
    return (
        <>
            {
                loading === true 
                ? <>
                    <div className={`${styles.spinner} fa-spin`}>
                        <i class="fas fa-spinner"></i>
                    </div>
                    <p className={styles.loadingText}>Loading...</p>
                </>
                : <ul className={styles.videos}>
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
            }
        </>
    )  
};

export default Videos;