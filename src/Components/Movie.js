import { Link } from "react-router-dom";


const Movie = ({data}) => {

    const api_img = 'https://image.tmdb.org/t/p/w500'

    return ( 
        <div className="movie">
            <div className="">
        {data && <div className="card-container grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((movie) => (
            <div  data-testid="movie-card" className="drop-shadow-lg bg-white" key={movie.id} {...movie}>
                <Link to={`/HNGx-EmjayNet/data/${movie.id}`}>
                <img src={api_img+movie.poster_path} alt="" data-testid="movie-poster" className="w-full"/>
            <div className="flex flex-col gap-3 p-2 pb-4 md:p-6 md:h-[10rem]">
                <p data-testid="movie-title" className="text-lg font-bold">{movie.title}</p>
                <p data-testid="movie-release-date" className="text-sm text-white bg-red-500 py-1 px-2 w-fit rounded-full">{movie.release_date}</p>
            </div>
                </Link>
           
            </div>
        ))}
            
       </div>}
      </div>
        </div>
     );
}
 
export default Movie;