import { StyledWrapper, StyledOrder, StyledPreviewWrapper } from '../../utilities/CartPreview/StyledCartPreview'
import ItemPreview from '../../components/ItemPreview/ItemPreview'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const CartPreview = (props) => {

    const { cart, state, setIsCartOpen, setItemsInCart } = props;

    let obj = {};
 
    let totalPriceArr = cart.map(x => Number(x.price));

    const totalPrice = totalPriceArr.reduce((a, b) => a + b, 0);

    for (let el in cart) {
        if (!obj.hasOwnProperty(cart[el].id)) {
            obj[cart[el].id] = 1;
        }
        else {
            const count = obj[cart[el].id] + 1;
            obj[cart[el].id] = count;
        }
    }

    const arr = Object.entries(obj);

    useEffect(() => {
        setItemsInCart(Object.keys(obj).length);
    }, [cart])


    return (
        <StyledPreviewWrapper>
            <div style={{overflowY: 'scroll', maxHeight: '300px'}}>
                {arr[0] && arr.map(x => <ItemPreview state={state} key={x[0]} id={x[0]} quantity={x[1]}/>) }
            </div>
            <StyledWrapper>
                <h3>Total price: ${totalPrice.toFixed(2)}</h3>
                <Link to="/cart" onClick={() => setIsCartOpen(false)} style={{textDecoration: 'none'}}>
                    <StyledOrder>Checkout</StyledOrder>
                </Link>
            </StyledWrapper>
        </StyledPreviewWrapper>
    );
}
 
export default CartPreview;