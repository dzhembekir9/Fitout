import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import Item from '../../components/Item/Item'
import Filter from '../../components/Filter/Filter'
import DropDown from '../../components/DropDown/DropDown'
import { useHistory } from 'react-router'
import Loader from '../../components/Loader/Loader'

const MainContent = (props) => {

    const url = 'https://fitout-shop-default-rtdb.firebaseio.com/.json';

    const { state, handleSetState, isOpen, isPending, setIsPending, cart, setCart } = props;
    const history = useHistory();

    useEffect(() => {
        setIsPending(true);
        axios.get(url)
                .then(res => {
                    handleSetState(res.data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err);
                });
    }, [url]);

    return (
        <div className="container">
            {isOpen && <DropDown />}
            <Filter state={state} handleSetState={handleSetState}/>
            <div className="row">
            {isPending && <Loader />}
                {!isPending && state && 
                Object.entries(state).map(x => 
                <div key={x[1].id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Item 
                        cart={cart}
                        setCart={setCart}
                        state={state}
                        title={x[1].title}
                        description={x[1].description}
                        price={x[1].price}
                        url={x[1].url}
                        key={x[1].id}
                        id={x[1].id}
                        handleDelete = {() => {
                            axios.delete(`https://fitout-shop-default-rtdb.firebaseio.com/${x[0]}.json`)
                                .then(() => {
                                    const filtered = Object.values(state).filter(prod => prod.id !== x[1].id);
                                    props.handleSetState(filtered);
                                    history.push('/');
                                });
                        }}
                    />
                </div>)}
            </div>
        </div>
    );
}
 
export default MainContent;
