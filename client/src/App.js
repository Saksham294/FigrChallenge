import { useEffect } from 'react';
import './App.css';
import Frame2 from './components/Frame2/Frame2';
import Frame3 from './components/Frame3/Frame3';
import Frame4 from './components/Frame4/Frame4';
import Frame5 from './components/Frame5/Frame5';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  return (
    <div className="App">
     <Frame2/>
     <Frame3/>
     <Frame4/>
     <Frame5/>
    </div>
  );
}

export default App;
