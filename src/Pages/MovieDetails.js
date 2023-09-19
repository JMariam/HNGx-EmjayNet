import Sidebar from "../Components/Sidebar";
import useFetch from "../Components/useFetch";
import {useParams} from 'react-router-dom';


const MovieDetails = () => {

    const api_img = 'https://image.tmdb.org/t/p/w500'

    const { id } = useParams();
    const {data, isPending, error} = useFetch("https://api.themoviedb.org/3/movie/{movie_id}?api_key=ff5ce76710681f496c71c8900cf705b1");
    
    return ( 
        <div className="movie-details">
            <Sidebar/>
            <div className=" container mx-auto p-6">
            {isPending && <div>Loading.....</div>}
            {error && <div>{ error }</div>}
            {data && ( 
                    <div className="">
                        <img src={api_img+data.poster_path} alt=""className="w-full"/>
                        <p>{data.overview}</p>
                    </div>
                     )
                }
            </div>
        </div>
     );
}
 
export default MovieDetails;