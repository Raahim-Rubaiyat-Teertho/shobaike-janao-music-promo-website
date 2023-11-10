import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import ChooseLogin from "./pages/Login pages/ChooseLogin";
import ArtistLogin from "./pages/Login pages/ArtistLogin";
import AudienceLogin from "./pages/Login pages/AudienceLogin";
import ChooseSignup from "./pages/Signup Pages/ChooseSignup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/login" element={<ChooseLogin />} />
          <Route path="/login/artist" element={<ArtistLogin />} />
          <Route path="/login/audience" element={<AudienceLogin />} />
        </Routes>

        <Routes>
          <Route path="/signup" element={<ChooseSignup />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
