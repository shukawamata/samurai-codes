import Header from './Header';
import Home from './Home';
import Replays from './Replays';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header title="Work out Camera"/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/replays" element={<Replays />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
