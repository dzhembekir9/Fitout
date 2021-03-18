import DropDown from '../../components/DropDown/DropDown'

const Cart = (props) => {

    const { isOpen, cart, setCart } = props;

    console.log(cart);

    return (

        <div>
            {isOpen && <DropDown />}
            <h1>Cart</h1>
            {Object.values(cart).map(x => <div>{x.title}</div>)}
        </div>
    );
}
 
export default Cart;