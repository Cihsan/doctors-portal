import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Review from './Pages/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment'element={<Appointment/>}></Route>
        <Route path='/reviews'element={<Review/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
