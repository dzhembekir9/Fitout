import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GlobalStyles from '../../utilities/Global/GlobalStyles'
import MainContent from '../MainContent/MainContent'
import Create from '../../components/Create/Create'
import Footer from "../../components/Footer/Footer"
import NotFound from '../../components/NotFound/NotFound'
import ItemDetails from '../../components/ItemDetails/ItemDetails'
import Cart from '../../components/Cart/Cart'

const Home = (props) => {

    const [isPending, setIsPending] = useState(false);
    const { isOpen, setIsOpen, displayFooter } = props;
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);

    return (
        <div>
            <GlobalStyles />
            <Navbar
                state={props.state}
                handleSetState={props.handleSetState}
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
                state={props.state}
                handleSetState={props.handleSetState}
                isPending={isPending}
                setIsPending={setIsPending}
                isOpen={isOpen}
                cart={cart}
                setCart={setCart}
                setItemsInCart={setItemsInCart}
            /> 
            : props.page === 'create' ? 
            <Create
                state={props.state}
                handleSetState={props.handleSetState}
                isOpen={isOpen}
            /> 
            : props.page === 'not-found' ? 
            <NotFound 
                isOpen={isOpen}
            />
            : props.page === 'details' ?
            <ItemDetails
                state={props.state}
                handleSetState={props.handleSetState}
                isOpen={isOpen}
                isPending={isPending}
                setIsPending={setIsPending}
            />
            : props.page === 'cart' ?
            <Cart 
                isOpen={isOpen}
                cart={cart}
                state={props.state}
            />
            : null} 
            {!isPending && displayFooter && <Footer />}
        </div>
    );
}
 
export default Home;