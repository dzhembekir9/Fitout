import StyledLogo from '../../utilities/Logo/StyledLogo'
import { Link } from 'react-router-dom'

const Logo = (props) => {
    return (
        <StyledLogo>
            {props.title}
        </StyledLogo>
    );
}

// const Logo = (props) => {
//     return (
//         <StyledLogo>
//             <Link to='/'>{props.title}</Link>
//         </StyledLogo>
//     );
// }
 
export default Logo;