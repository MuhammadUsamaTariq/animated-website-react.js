import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const onScroll = () => {
         window.scrollTo(0, 0) 
        
    };
    
   onScroll()
     
   
}, []);
  return (
    <div>
      <Navbar />
      <Banner/>
      <AboutUs/>
    </div>
  );
}

export default App;
