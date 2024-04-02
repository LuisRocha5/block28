import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Blue';
import Red from './Red'; 
import House from './House';

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/blue'>Blue</Link>
          <Link to='/red'>Red</Link>
          <Link to='/house'>Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/house" element={<House />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
