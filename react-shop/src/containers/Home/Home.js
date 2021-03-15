import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import GlobalStyles from '../../utilities/Global/GlobalStyles'
import MainContent from '../../containers/MainContent/MainContent'
import Create from '../../components/Create/Create'
import Footer from "../../components/Footer/Footer"

const Home = (props) => {

    const [isPending, setIsPending] = useState(false);

    return (
        <div>
            <GlobalStyles />
            <Navbar state={props.state} handleSetState={props.handleSetState} isPending={isPending}/>
            {props.page === 'home' ? <MainContent state={props.state} handleSetState={props.handleSetState} isPending={isPending} setIsPending={setIsPending}/> 
            : props.page === 'create' ? <Create state={props.state} handleSetState={props.handleSetState}/> 
            : null} 
            <Footer/>
        </div>
    );
}
 
export default Home;