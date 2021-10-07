import { useEffect, useState } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Videos from './components/videos';

function App() {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return (
    <>
      <Navbar/>
      <Videos
      videos={videos}/>
    </> 
  );
}

export default App;