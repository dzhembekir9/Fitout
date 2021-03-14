import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../../components/Item/Item'
import Filter from '../../components/Filter/Filter'

const MainContent = (props) => {

    const url = 'https://fitout-shop-default-rtdb.firebaseio.com/.json';

    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        axios.get(url)
                .then(res => {
                    props.handleSetState(res.data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err);
                });          
    }, [url]);

    return (
        <div className="container">
            <Filter state={props.state} handleSetState={props.handleSetState}/>
            <div className="row">
                {!isPending && props.state && 
                Object.values(props.state).map(x => 
                <div key={x.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Item title={x.title} description={x.description} price={x.price} url={x.url} key={x.id}/>
                </div>)}
            </div>
        </div>
    );
}
 
export default MainContent;
