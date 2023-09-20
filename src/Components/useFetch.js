import { useState, useEffect } from 'react';

const useFetch = (url) => {


    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const AbortCont = new AbortController();
        setTimeout(() => {
            fetch(url,  { signal: AbortCont.signal })
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
            return res.json()
            
        })
                .then((json) => {
                const top10 = json.results.slice(0, 10)
                setData(top10);
                setIsPending(false);
                setError(null);
            })
            
            .catch(err => {
                if (err.name === 'AbortError') {
                    
                }
                else{
                    setError(err.message);
                    setIsPending(false);
                }
               
            }) 
    }, 1000);

        return () => AbortCont.abort()
    
    }, [url]);
    
    console.log(data)

    return { data, isPending, error }
    
}


export default useFetch;