import { BsSnow3 } from "react-icons/bs";
import { IconContext } from 'react-icons'
import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <div className="icon">
        <IconContext.Provider value={{ className: 'react-icons-snow', color: '#e0ffff', size: '40px' }}>
          <BsSnow3 />
        </IconContext.Provider>
          <h1>{props.title}</h1>
      </div>
      <Nav />
    </header>
  )
}


export default Header