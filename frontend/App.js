import logo from './logo.svg';
import './App.css';
import"./components/NavBar";
import NavBar from './components/NavBar';
import {Route,Routes} from "react-router-dom"
import Cart from './components/Cart';
import Home from './components/Home';
function App() {
  
  return (
    <div className="Container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
  