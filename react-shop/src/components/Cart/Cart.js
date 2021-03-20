import DropDown from '../../components/DropDown/DropDown'

const Cart = (props) => {

    const { isOpen, cart, state } = props;


    return (

        <div>
            {isOpen && <DropDown />}
            <h1>My cart</h1>
            
        </div>
    );
}
 
export default Cart;