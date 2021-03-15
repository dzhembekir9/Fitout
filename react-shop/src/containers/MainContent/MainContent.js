import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import Item from '../../components/Item/Item'
import Filter from '../../components/Filter/Filter'
import LoadingBar from '../../components/LoadingBar/LoadingBar'

const MainContent = (props) => {

    const url = 'https://fitout-shop-default-rtdb.firebaseio.com/.json';

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
            <Filter state={props.state} handleSetState={props.handleSetState}/>
            <div className="row">
                {props.isPending && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
                {!props.isPending && props.state && 
                Object.values(props.state).map(x => 
                <div key={x.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Item title={x.title} description={x.description} price={x.price} url={x.url} key={x.id}/>
                </div>)}
            </div>
        </div>
    );
}
 
export default MainContent;
