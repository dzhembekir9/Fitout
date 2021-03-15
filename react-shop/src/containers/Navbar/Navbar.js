import StyledNavbar from "../../utilities/Navbar/StyledNavbar"
import Logo from "../../components/Logo/Logo"
import NavbarButton from "../../components/NavbarButton/NavbarButton"
import SearchBar from "../../components/SearchBar/SearchBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Burger from '../../components/Burger/Burger'
import { StyledLink } from '../../utilities/Global/GlobalStyles'
import LoadingBar from '../../components/LoadingBar/LoadingBar'

const Navbar = (props) => {

  const { isOpen, setIsOpen } = props;

  return (
    <StyledNavbar style={{height: 'auto'}}>
      {props.isPending && <LoadingBar />}
      <StyledLink to="/shop">
        <Logo title="Fitout" />
      </StyledLink>
      <SearchBar state={props.state} handleSetState={props.handleSetState}/>
      <div>
        <StyledLink to="/shop">
          <NavbarButton text="Shop" />
        </StyledLink>
        <StyledLink to="/create">
          <NavbarButton text="Create" />
        </StyledLink>
        <Burger handleClick = {(e) => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}/>
      </div>
  </StyledNavbar>
  );
};

export default Navbar;