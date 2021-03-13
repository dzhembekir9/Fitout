import { StyledItemWrapper, StyledTitle, StyledPrice, StyledImage, StyledItemActionsWrapper, StyledItemAction, StyledDescription, StyledItemContentWrapper } from '../../utilities/Item/StyledItem'

const Item = (props) => {
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
                <StyledItemAction>Delete Item</StyledItemAction>
            </StyledItemActionsWrapper>
        </StyledItemWrapper>
    );
}
 
export default Item;