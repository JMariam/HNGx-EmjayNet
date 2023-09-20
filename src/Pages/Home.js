import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import useFetch from "../Components/useFetch";
import Movie from "../Components/Movie";
const Home = () => {

    const  {data, isPending, error} = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ff5ce76710681f496c71c8900cf705b1");
    
    return ( 
        <div className="home main">
            <div className="">
                <Hero/>
                <div className="movies container mx-auto p-6">
                <p className="text-2xl text-pink-800 font-bold mb-6">Top 10 Movies</p>
                { error && <div>{ error }</div> }
                { isPending && <div> Loading..... </div> }
                {data && <Movie data={data}/>}
                </div>
               
            </div>
            <Footer/>
        </div>
        
     );
}
 
export default Home;