import { Link } from 'react-router-dom';
import { StyledItemWrapper, StyledTitle, StyledPrice, StyledImage, StyledItemActionsWrapper, StyledItemAction, StyledDescription, StyledItemContentWrapper, StyledHeart } 
from '../../utilities/Item/StyledItem'
import heart1 from '../../images/heart-default.png'
import heart2 from '../../images/heart-colored.png'
import { useState } from 'react';

const Item = (props) => {

    const { handleDelete, cart, setCart, state, item } = props;
    const [heart, setHeart] = useState('default');

    const linkStyle = {
        textDecoration: 'none',
        color: '#2b331f'
    }

    const handleAddToCart = () => {

        const items = Object.values(state).filter(x => x.id === item.id);
        const selectedItems = Object.assign({}, ...items);

        setCart([...cart, {...selectedItems, quantity: 0}]);

    }

    return (
        <StyledItemWrapper>

            {heart === 'default' ? 
            <StyledHeart onClick={() => {heart === 'default' ? setHeart('colored') : setHeart('default')}} src={heart1} alt="heart"/> : 
            <StyledHeart onClick={() => {heart === 'default' ? setHeart('colored') : setHeart('default')}} src={heart2} alt="heart"/>}

            <Link style={linkStyle} to={`/item/${item.id}`}>
                <StyledItemContentWrapper>
                    
                    <StyledImage url={item.url} />
                    <StyledTitle>
                        {item.title && item.title.length > 15 ? item.title.substring(0, 15) + '...' : item.title}
                    </StyledTitle>
                    <StyledDescription>
                        {item.description && item.description.length> 20 ? item.description.substring(0, 20) + '...' : item.description}
                    </StyledDescription>
                </StyledItemContentWrapper>

                <StyledPrice>
                    ${item.price && item.price.length > 15 ? item.price.substring(0, 15) + '...' : item.price}
                </StyledPrice>
            </Link>

            <StyledItemActionsWrapper>
                <StyledItemAction onClick={() => {
                    handleAddToCart();
                }}>Add to Cart</StyledItemAction>
                <StyledItemAction onClick={handleDelete}>Delete Item</StyledItemAction>
            </StyledItemActionsWrapper>
            
        </StyledItemWrapper>
    );
}
 
export default Item;