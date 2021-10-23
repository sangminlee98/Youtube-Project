import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import Videos from './components/video/videos';
import Video_detail from './components/video_detail/video_detail';

function App({youtube}) {

  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);
  const [loading,setLoading] = useState(false);

  const seacrhVideo = useCallback(
    (query) => {
    setSelectedVideo(null);
    setLoading(true);
    youtube.search(query)
    .then(result => {
      setVideos(result);
      setLoading(false);
    });
  }, [youtube]);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(()=>{
    setLoading(true);
    youtube.mostPopular()
    .then(result => {
      setVideos(result);
      setLoading(false)});
  },[youtube]);
  return (
    <div className={styles.app}>
      <Navbar searchVideo={seacrhVideo}/>
      <section className={styles.content}>
        {selectedVideo&& <div className={styles.detail}>
          <Video_detail video={selectedVideo}/>
        </div>}
        <div className={styles.list}>
          {
            loading === true ? 
            <span className={styles.loading}>
              <i className="fas fa-spinner fa-5x fa-spin"></i>
            </span> :
            <Videos videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
          }
        </div>
      </section>
    </div> 
  );
}

export default App;
