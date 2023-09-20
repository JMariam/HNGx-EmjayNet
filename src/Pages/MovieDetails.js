import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


const MovieDetails = () => {

    const api_img = 'https://image.tmdb.org/t/p/w500'

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const AbortCont = new AbortController();
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ff5ce76710681f496c71c8900cf705b1`,  { signal: AbortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
            return res.json()
            
        })
                .then((json) => {
                setData(json);
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
    
    }, []);
    
    return ( 
        <div className="movie-details main">
            <div className=" container mx-auto p-6">
            {isPending && <div>Loading.....</div>}
            {error && <div>{ error }</div>}
            {data && ( 
                    <div className="">
                        <img src={api_img+data.poster_path} alt=""className="md:w-[50rem] md:h-[25rem] rounded-2xl"/>
                        <div className="my-4 p-3">
                            <p className="text-[0.6rem] md:text-[0.8rem]">{data.release_date}</p>
                            <p className="md:w-11/12 text-[0.6rem] md:text-[0.8rem] my-2">{data.overview}</p>
                        </div>
                    </div>
                     )
                }
            </div>
        </div>
     );
}
 
export default MovieDetails;