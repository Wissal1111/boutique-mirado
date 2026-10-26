
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Boutique from './pages/Boutique';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/boutique" element={<Boutique />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
