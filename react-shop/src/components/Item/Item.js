import { Link } from 'react-router-dom';
import { StyledItemWrapper, StyledTitle, StyledPrice, StyledImage, StyledItemActionsWrapper, StyledItemAction, StyledDescription, StyledItemContentWrapper } 
from '../../utilities/Item/StyledItem'

const Item = (props) => {

    const { handleDelete, id, cart, setCart, state, setItemsInCart } = props;

    const linkStyle = {
        textDecoration: 'none',
        color: '#2b331f'
    }

    const handleAddToCart = () => {

        const items = Object.values(state).filter(x => x.id === id);
        const selectedItems = Object.assign({}, ...items);

        setCart([...cart, {...selectedItems, quantity: 0}]);

    }

    return (
        <StyledItemWrapper>
            
            <Link style={linkStyle} to={`/item/${id}`}>
                <StyledItemContentWrapper>
                    <StyledImage url={props.url} />
                    <StyledTitle>
                        {props.title && props.title.length > 15 ? props.title.substring(0, 15) + '...' : props.title}
                    </StyledTitle>
                    <StyledDescription>
                        {props.description && props.description.length> 20 ? props.description.substring(0, 20) + '...' : props.description}
                    </StyledDescription>
                </StyledItemContentWrapper>

                <StyledPrice>
                    ${props.price && props.price.length > 15 ? props.price.substring(0, 15) + '...' : props.price}
                </StyledPrice>
            </Link>

            <StyledItemActionsWrapper>
                <StyledItemAction onClick={() => {
                    handleAddToCart();
                    //setItemsInCart(prev => prev + 1);
                }}>Add to Cart</StyledItemAction>
                <StyledItemAction onClick={handleDelete}>Delete Item</StyledItemAction>
            </StyledItemActionsWrapper>
            
        </StyledItemWrapper>
    );
}
 
export default Item;