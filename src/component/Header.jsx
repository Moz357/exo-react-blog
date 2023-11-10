import ProfileMenu from "../ProfileMenu";
import { Link } from "react-router-dom";
function Header(){
    
    return (
        <header>
          <h1 className ="App-logo">Mon Super blog </h1>
          <nav>
            <ul className = "App-link">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/Profil">Profil</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <ProfileMenu />
            </ul>
          </nav>
        </header>
      );
    }
    
export default Header