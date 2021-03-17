import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GlobalStyles from '../../utilities/Global/GlobalStyles'
import MainContent from '../../containers/MainContent/MainContent'
import Create from '../../components/Create/Create'
import Footer from "../../components/Footer/Footer"
import NotFound from '../../components/NotFound/NotFound'
import ItemDetails from '../../components/ItemDetails/ItemDetails'

const Home = (props) => {

    const [isPending, setIsPending] = useState(false);
    const { isOpen, setIsOpen, displayFooter } = props;

    return (
        <div>
            <GlobalStyles />
            <Navbar 
                state={props.state}
                handleSetState={props.handleSetState}
                isPending={isPending}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {props.page === 'home' ? 
            <MainContent 
                state={props.state}
                handleSetState={props.handleSetState}
                isPending={isPending}
                setIsPending={setIsPending}
                isOpen={isOpen}
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
            : null} 
            {displayFooter && <Footer />}
        </div>
    );
}
 
export default Home;