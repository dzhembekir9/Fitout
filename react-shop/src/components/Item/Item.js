import { StyledItemWrapper, StyledTitle, StyledPrice, StyledImage, StyledItemActionsWrapper, StyledItemAction, StyledDescription, StyledItemContentWrapper } from '../../utilities/Item/StyledItem'

const Item = (props) => {
    return (
        <StyledItemWrapper>

            <StyledItemContentWrapper>
                <StyledImage url={props.url} />
                <StyledTitle>{props.title}</StyledTitle>
                <StyledDescription>{props.description}</StyledDescription>
            </StyledItemContentWrapper>

            <StyledPrice>${props.price}</StyledPrice>

            <StyledItemActionsWrapper>
                
                <StyledItemAction>Add to Cart</StyledItemAction>

            </StyledItemActionsWrapper>
        </StyledItemWrapper>
    );
}
 
export default Item;