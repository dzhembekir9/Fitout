import { StyledWrapper, StyledImg, StyledInfo, StyleImgWrapper, StyledPrice } from '../../utilities/ItemPreview/StyledItemPreview'

const ItemPreview = (props) => {

    const { state, id, quantity } = props;

    const items = Object.values(state).filter(x => x.id === id);

    return (
        <div>
            {items.map(x => (
                <StyledWrapper key={x.id}>
                    <StyleImgWrapper>
                        <StyledImg src={x.url} alt="product"/>
                    </StyleImgWrapper>
                    <StyledInfo>
                        <h3>{x.title.length > 14 ? x.title.substring(0, 14) + '...' : x.title}</h3>
                        <p>quantity: {quantity}</p>
                    </StyledInfo>
                    <StyledPrice>
                        <p>${x.price.length > 5 ? x.title.substring(0, 5) + '...' : x.price}</p>
                    </StyledPrice>
                </StyledWrapper>
            ))}
        </div>
    );
}
 
export default ItemPreview;