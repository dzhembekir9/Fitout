import path from '../../images/burger-menu.png'
import { StyledBurger } from '../../utilities/Burger/StyledBurger'

const Burger = (props) => {

    const { isOpen, setIsOpen } = props;

    return (
        <StyledBurger onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
        }} src={path} alt="burger-menu"/>
    );
}
 
export default Burger;