import { useEffect, useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';
import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import Videos from './components/videos';
import Video_detail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);
  const [loading,setLoading] = useState(false);

  const seacrhVideo = (query) => {
    setSelectedVideo(null);
    setLoading(true);
    youtube.search(query)
    .then(result => {
      setVideos(result);
      setLoading(false);
    });
  }
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  useEffect(()=>{
    youtube.mostPopular()
    .then(result => setVideos(result));
  },[]);

  return (
    <div className={styles.app}>
      <Navbar searchVideo={seacrhVideo}/>
      <section className={styles.content}>
        {selectedVideo&& <div className={styles.detail}>
          <Video_detail video={selectedVideo}/>
        </div>}
        <div className={styles.list}>
          <Videos videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'} loading={loading}/>
        </div>
      </section>
    </div> 
  );
}

export default App;
