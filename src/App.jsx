import { Routes, Route } from 'react-router';
import './App.css';
import Show from './components/Show';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
  
    // Add the components in respective routes
    <Routes>
    <Route path="/" element={<Show/>}></Route>
    <Route path="/home" element={<Navbar/>}></Route>
    <Route path="/projects" element={<Show/>}></Route>
    <Route path="/contribute" element={<Navbar/>}></Route>
    <Route path="/github" element={<Navbar/>}></Route>
    </Routes>
  )
}

export default App
