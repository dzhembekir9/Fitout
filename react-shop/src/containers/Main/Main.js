import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GlobalStyles from '../../utilities/Global/GlobalStyles'
import MainContent from '../MainContent/MainContent'
import Create from '../../components/Create/Create'
import Footer from "../../components/Footer/Footer"
import NotFound from '../../components/NotFound/NotFound'
import ItemDetails from '../../components/ItemDetails/ItemDetails'
import Cart from '../../components/Cart/Cart'

const Main = (props) => {

    const [products, setProducts] = useState({});
    const [isPending, setIsPending] = useState(false);
    const { displayFooter } = props;
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <GlobalStyles />
            <Navbar
                state={products}
                handleSetState={setProducts}
                isPending={isPending}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                cart={cart}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
            />
            {props.page === 'home' ? 
            <MainContent 
                state={products}
                handleSetState={setProducts}
                isPending={isPending}
                setIsPending={setIsPending}
                isOpen={isOpen}
                cart={cart}
                setCart={setCart}
            /> 
            : props.page === 'create' ? 
            <Create
                state={products}
                handleSetState={setProducts}
                isOpen={isOpen}
            /> 
            : props.page === 'not-found' ? 
            <NotFound 
                isOpen={isOpen}
            />
            : props.page === 'details' ?
            <ItemDetails
                state={products}
                handleSetState={setProducts}
                isOpen={isOpen}
                isPending={isPending}
                setIsPending={setIsPending}
            />
            : props.page === 'cart' ?
            <Cart 
                isOpen={isOpen}
                cart={cart}
                setCart={setCart}
                state={products}
            />
            : null} 
            {!isPending && displayFooter && <Footer />}
        </div>
    );
}
 
export default Main;