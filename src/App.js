import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';
import  NavBar   from './components/NavBar';
import { Home } from './components/Home';
import { Gallery}  from './components/Gallery'
import { About } from './components/About';
import Footer from './components/Footer'


function App() {
  return (
    <>
   
    <BrowserRouter>
    <NavBar />  
      <Routes>
      <Route exact path='/'  element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/> 
      <Route path='/about' element={<About/>}/> 
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
