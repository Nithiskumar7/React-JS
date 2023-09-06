
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
