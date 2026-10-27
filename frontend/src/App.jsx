
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Boutique from './pages/Boutique';
import Details from './pages/Details';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, [pathname]);

    return null;
}
function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/boutique/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
