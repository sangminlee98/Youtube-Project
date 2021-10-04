import { useState } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Videos from './components/videos';

function App() {
  const [video,setVideo] = useState([
    {id:1, name:"first", count:0},
    {id:2, name:"second", count:1},
    {id:3, name:"third", count:2}
  ])
  return (
    <>
      <Navbar/>
      <Videos
      video={video}/>
    </> 
  );
}

export default App;
