import StyledNavbar from '../../utilities/Navbar/StyledNavbar'
import Logo from '../../components/Logo/Logo'
import NavbarButton from '../../components/NavbarButton/NavbarButton'
import { default as Wrapper } from '../../utilities/NavbarButton/StyledNavbarButtonWrapper'
import SearchBar from '../../components/SearchBar/SearchBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Navbar = () => {
    return (
        <Router>
            <StyledNavbar>
                <Logo title='Fitout' />
                <SearchBar />
                <Wrapper>
                    <NavbarButton text='Shop'/>
                    <NavbarButton text='Create'/>
                </Wrapper>
            </StyledNavbar>
        </Router>
    );
}

export default Navbar;