import path from '../../images/burger-menu.png'
import { StyledBurger } from '../../utilities/Burger/StyledBurger'

const Burger = (props) => {

    const { handleClick } = props;

    return (
        <StyledBurger onClick={(e) => handleClick(e)} src={path} alt="burger-menu"/>
    );
}
 
export default Burger;