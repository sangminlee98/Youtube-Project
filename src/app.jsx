import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import Videos from './components/videos';

function App({youtube}) {
  const [videos,setVideos] = useState([]);

  const seacrhVideo = (query) => {
    youtube.search(query)
    .then(result => setVideos(result));
  }
  

  useEffect(()=>{
    youtube.mostPopular()
    .then(result => setVideos(result));
  },[]);

  return (
    <div className={styles.app}>
      <Navbar
      searchVideo={seacrhVideo}/>
      <Videos
      videos={videos}/>
    </div> 
  );
}

export default App;
