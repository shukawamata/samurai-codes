import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Trail from './Trail';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header title="Gelände Powder Guide"/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/trail" element={<Trail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
