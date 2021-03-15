import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import axios from 'axios'
import Item from '../../components/Item/Item'
import Filter from '../../components/Filter/Filter'

const MainContent = (props) => {

    console.log(props);

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
                Object.entries(props.state).map(x => 
                <div key={x[1].id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <Item 
                        title={x[1].title}
                        description={x[1].description}
                        price={x[1].price}
                        url={x[1].url}
                        itemKey={x[0]}
                        id={x[1].id}
                        key={x[1].id}
                        state={props.state}
                        handleSetState={props.handleSetState}
                    />
                </div>)}
            </div>
        </div>
    );
}
 
export default MainContent;
