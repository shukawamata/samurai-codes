import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">{props.title}</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/replays">Replays</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
  }
  
  
  export default Header