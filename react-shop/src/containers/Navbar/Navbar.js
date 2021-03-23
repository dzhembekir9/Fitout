import { default as StyledNavbar, StyledImg, StyledItemsQuantity } from "../../utilities/Navbar/StyledNavbar"
import Logo from "../../components/Logo/Logo"
import NavbarButton from "../../components/NavbarButton/NavbarButton"
import SearchBar from "../../components/SearchBar/SearchBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Burger from '../../components/Burger/Burger'
import { StyledLink } from '../../utilities/Global/GlobalStyles'
import LoadingBar from '../../components/LoadingBar/LoadingBar'
import { useEffect } from 'react'
import cartImg from '../../images/cart.png'
import CartPreview from '../../components/CartPreview/CartPreview'

const Navbar = (props) => {

  const { state, handleSetState, isOpen, setIsOpen, isCartOpen, setIsCartOpen, cart, itemsInCart, setItemsInCart, isPending } = props;

  return (
    <StyledNavbar>
      {isPending && <LoadingBar />}
      <StyledLink to="/shop">
        <Logo title="Fitout" />
      </StyledLink>
      <SearchBar state={state} handleSetState={handleSetState}/>
      <div style={{position: 'relative'}}>
        <StyledItemsQuantity>{itemsInCart}</StyledItemsQuantity>
        <StyledImg onClick={() => isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)} src={cartImg} alt="cart"/>
        {isCartOpen && <CartPreview setIsCartOpen={setIsCartOpen} state={state} cart={cart} setItemsInCart={setItemsInCart}/>}
        <StyledLink to="/shop">
          <NavbarButton text="Shop"/>
        </StyledLink>
        <StyledLink to="/create">
          <NavbarButton text="Create"/>
        </StyledLink>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} handleClick = {
          useEffect(() => {
            const callback = () => {
              if (window.innerWidth > 1200) {
                setIsOpen(false);
              }
            };
        
            window.addEventListener("resize", callback);
        
            return () => {
              window.removeEventListener("resize", callback);
            };
          }, [isOpen])
        }/>
      </div>
  </StyledNavbar>
  );
};

export default Navbar;