import { useEffect, useState } from 'react'
import axios from 'axios'


const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(url)
                .then(res => {
                    setData(res.data);
                    setIsPending(false);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });          
            return { data, isPending, error, setData };
    }, [url]);

};

export default useFetch;