import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
