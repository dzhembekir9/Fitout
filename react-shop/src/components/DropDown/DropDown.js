import { StyledDropDownWrapper, StyledDropDownButton } from '../../utilities/DropDown/StyledDropDown'
import { Link } from 'react-router-dom'

const DropDown = () => {
    
    return (
        <StyledDropDownWrapper>
            <Link style={{textDecoration: 'none'}} to="/shop">
                <StyledDropDownButton>Shop</StyledDropDownButton>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/create">
                <StyledDropDownButton>Create</StyledDropDownButton>
            </Link>
        </StyledDropDownWrapper>
    );
}
 
export default DropDown;