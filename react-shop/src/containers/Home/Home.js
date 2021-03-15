import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GlobalStyles from '../../utilities/Global/GlobalStyles'
import MainContent from '../../containers/MainContent/MainContent'
import Create from '../../components/Create/Create'
import Footer from "../../components/Footer/Footer"

const Home = (props) => {

    const [isPending, setIsPending] = useState(false);
    const { isOpen, setIsOpen } = props;

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
            : null} 
            <Footer/>
        </div>
    );
}
 
export default Home;