import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import Item from '../../components/Item/Item'
import Filter from '../../components/Filter/Filter'
import DropDown from '../../components/DropDown/DropDown'

const MainContent = (props) => {

    const url = 'https://fitout-shop-default-rtdb.firebaseio.com/.json';

    const { isOpen } = props;

    useEffect(() => {
        props.setIsPending(true);
        axios.get(url)
                .then(res => {
                    props.handleSetState(res.data);
                    props.setIsPending(false);
                })
                .catch(err => {
                    console.log(err);
                });          
    }, [url]);

    return (
        <div className="container">
            {isOpen && <DropDown />}
            <Filter state={props.state} handleSetState={props.handleSetState}/>
            <div className="row">
                {props.isPending && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
                {!props.isPending && props.state && 
                Object.entries(props.state).map(x => 
                <div key={x[1].id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Item 
                        title={x[1].title}
                        description={x[1].description}
                        price={x[1].price}
                        url={x[1].url}
                        key={x[1].id}
                        handleDelete = {() => {
                            axios.delete(`https://fitout-shop-default-rtdb.firebaseio.com/${x[0]}.json`);
                            const filtered = Object.values(props.state).filter(prod => prod.id !== x[1].id);
                            props.handleSetState(filtered);
                        }}
                    />
                </div>)}
            </div>
        </div>
    );
}
 
export default MainContent;
