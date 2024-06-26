import Home from '../pages/Home';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignUp/>} />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/home" element={<Home/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
