import StyledNavbar from "../../utilities/Navbar/StyledNavbar";
import Logo from "../../components/Logo/Logo";
import NavbarButton from "../../components/NavbarButton/NavbarButton";
import { default as Wrapper } from "../../utilities/NavbarButton/StyledNavbarButtonWrapper";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/shop">
        <Logo title="Fitout" />
      </Link>
      <SearchBar />
      <Wrapper>
        <Link to="/shop">
          <NavbarButton text="Shop" />
        </Link>
        <Link to="/create">
          <NavbarButton text="Create" />
        </Link>
      </Wrapper>
  </StyledNavbar>
  );
};

export default Navbar;