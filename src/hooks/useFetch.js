import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(
        () => {
            async function getData(){
                try{
                    const response = await axios.get(url);
                    const responseData = response.data;
                    console.log(responseData);
                    setData(responseData);
                    setLoading(false);
                }
                catch (err){
                    setLoading(false);
                    setError(true);
                }
            }
            getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );
    return {loading, error, data};
};

export default useFetch;