import StyledNavbar from "../../utilities/Navbar/StyledNavbar"
import Logo from "../../components/Logo/Logo"
import NavbarButton from "../../components/NavbarButton/NavbarButton"
import SearchBar from "../../components/SearchBar/SearchBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Burger from '../../components/Burger/Burger'
import { StyledLink } from '../../utilities/Global/GlobalStyles'
import { useState } from "react"

const Navbar = (props) => {

  return (
    <StyledNavbar style={{height: 'auto'}}>
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
        <Burger />
      </div>
  </StyledNavbar>
  );
};

export default Navbar;