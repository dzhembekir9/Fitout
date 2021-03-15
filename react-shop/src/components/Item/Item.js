import { StyledItemWrapper, StyledTitle, StyledPrice, StyledImage, StyledItemActionsWrapper, StyledItemAction, StyledDescription, StyledItemContentWrapper } 
from '../../utilities/Item/StyledItem'
import axios from 'axios'

const Item = (props) => {

    const handleDelete = () => {
        axios.delete(`https://fitout-shop-default-rtdb.firebaseio.com/${props.itemKey}.json`);
        const filtered = Object.values(props.state).filter(x => x.id !== props.id);
        props.handleSetState(filtered);
    }

    return (
        <StyledItemWrapper>

            <StyledItemContentWrapper>
                <StyledImage url={props.url} />
                <StyledTitle>
                    {props.length && props.title.length > 15 ? props.title.substring(0, 15) + '...' : props.title}
                </StyledTitle>
                <StyledDescription>
                    {props.description && props.description.length> 20 ? props.description.substring(0, 20) + '...' : props.description}
                </StyledDescription>
            </StyledItemContentWrapper>

            <StyledPrice>${props.price}</StyledPrice>

            <StyledItemActionsWrapper>
                <StyledItemAction>Add to Cart</StyledItemAction>
                <StyledItemAction onClick={handleDelete}>Delete Item</StyledItemAction>
            </StyledItemActionsWrapper>
            
        </StyledItemWrapper>
    );
}
 
export default Item;