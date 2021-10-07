import React from 'react';
import styles from './video.module.css';

const Video = (props) => {
    return(
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={props.video.snippet.thumbnails.medium.url}/>
                <div className={styles.metaData}>
                    <p className={styles.title}>{props.video.snippet.title}</p>
                    <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );    
}

export default Video;