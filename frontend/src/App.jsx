
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Boutique from './pages/Boutique';
import Details from './pages/Details';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/boutique/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
