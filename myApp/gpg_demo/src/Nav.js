import { FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
        <ul>
            <div>
                <Link to="/">Home</Link>
                <Link to="/trail">Trail Guide</Link>
            </div>
        </ul>
        <form>
            <input 
                id="searchbox"
                type="text"
                placeholder="Find what you looking for"
            />
            <button className="search-button">
                <FaSearch  />
            </button>
            <button className="login">
                Sign In<BiLogIn />
            </button>
        </form>
    </nav>
    )
}

export default Nav