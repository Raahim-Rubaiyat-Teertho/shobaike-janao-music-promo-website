import { BrowserRouter, Routes, Route, Router, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import ChooseLogin from "./pages/Login pages/ChooseLogin";
import ArtistLogin from "./pages/Login pages/ArtistLogin";
import AudienceLogin from "./pages/Login pages/AudienceLogin";
import ChooseSignup from "./pages/Signup Pages/ChooseSignup";
import ArtistSignup from "./pages/Signup Pages/ArtistSignup";
import AudienceSignup from "./pages/Signup Pages/AudienceSignup";
import ArtistProfile from "./pages/Profile Pages/ArtistProfile";

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
          <Route path="/signup/artist" element={<ArtistSignup />}/>
          <Route path="/signup/audience" element={<AudienceSignup />}/>
        </Routes>

        <Routes>
          <Route path="/artist/:username" element={<ArtistProfile />} />
        </Routes>

        <Routes>
          <Route path="/artist/redirect" element={<Navigate to={"/artist/:username"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
