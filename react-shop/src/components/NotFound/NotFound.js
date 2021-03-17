import DropDown from '../../components/DropDown/DropDown'
import errorImg from '../../images/error.png'
import { StyledNotFoundWrapper, StyledImg, StyledLink } from '../../utilities/NotFound/StyledNotFound'

const NotFound = (props) => {

    const { isOpen } = props;

    return (
        <StyledNotFoundWrapper>
            <StyledImg src={errorImg} alt="Error"/>
            {isOpen && <DropDown />}
            <StyledLink style={{textAlign: 'center'}} to="/">Back to home page</StyledLink>
        </StyledNotFoundWrapper>
    );
}
 
export default NotFound;