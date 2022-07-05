import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
//import './App.css';
import  NavBar   from './components/NavBar';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery'


function App() {
  return (
    <>
    <NavBar />  
     <Routes>
   
           
      <Route exact path='/'  element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/> 
      </Routes>
    </>
  );
}

export default App;
