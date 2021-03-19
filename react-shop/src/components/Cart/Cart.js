import DropDown from '../../components/DropDown/DropDown'

const Cart = (props) => {

    const { isOpen, cart, state } = props;

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

    console.log(arr);

    // Object.values(state).filter(x => x.id === id);

    console.log(arr[0]);

    return (

        <div>
            {isOpen && <DropDown />}
            <h1>My cart</h1>
            
            {arr[0] && arr.map(x => x[0])}
        </div>
    );
}
 
export default Cart;