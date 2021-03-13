import StyledNavbar from "../../utilities/Navbar/StyledNavbar"
import Logo from "../../components/Logo/Logo"
import NavbarButton from "../../components/NavbarButton/NavbarButton"
import SearchBar from "../../components/SearchBar/SearchBar"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Burger from '../../components/Burger/Burger'

const Navbar = (props) => {

  return (
    <StyledNavbar>
      <Link to="/shop">
        <Logo title="Fitout" />
      </Link>
      <SearchBar state={props.state} handleSetState={props.handleSetState}/>
      <div>
        <Link to="/shop">
          <NavbarButton text="Shop" />
        </Link>
        <Link to="/create">
          <NavbarButton text="Create" />
        </Link>
        <Burger />
      </div>
  </StyledNavbar>
  );
};

export default Navbar;