import React, { memo } from 'react';
import styles from './video.module.css';

const Video = memo(
    ({video ,video:{snippet}, onVideoClick, display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return(
        <li className={`${styles.container} ${displayType}`} onClick={()=>onVideoClick(video)}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}/>
                <div className={styles.metaData}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
        );    
    }
);

export default Video;