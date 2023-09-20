import {FaSearch, FaBars, FaPlay} from 'react-icons/fa';
import logo from '../assets/tv.svg';

const Hero = () => {

    const openMenu = () =>{
       const menu = document.querySelector('.sidebar')
       const main = document.querySelector('.main')
       menu.classList.toggle('open')
       main.classList.toggle('open')
    }

    return ( 
        <div className="herobg">
            <div className="hero container mx-auto p-4 md:p-10">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img src={logo} alt="" className='w-8 md:w-12'/>
                        <p className="font-bold text-white text-lg  md:text-3xl ">MovieBox</p>
                    </div>
                    <div className="hidden w-[28rem] border border-white h-fit text-white md:flex justify-between p-2 text-xs">
                        <p className=''>What do you want to search?</p>
                        <FaSearch/>
                    </div>
                    <div className="hidden md:block cursor-pointer bg-pink-700 rounded-full text-white p-2 text-xl" onClick={openMenu}>
                        <FaBars/>
                    </div>
                    <FaSearch className='text-white cursor-pointer md:hidden'/>
                </div>
                <div className="mt-20">
                    <p className="font-bold text-2xl text-white mb-6 md:mb-0">John Wick 3 : <br /> Parabellum</p>
                    <p className="text-xs w-1/3 text-white my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae suscipit ratione non minus similique voluptatum eligendi architecto error. Ratione, similique impedit. Magnam ducimus excepturi voluptatem recusandae reprehenderit, in odit nemo a praesentium nisi eum, dolorum magni iste rerum veniam?</p>
                    <div className="bg-pink-700 text-white flex items-center gap-2 w-fit rounded py-1 px-2">
                        <FaPlay className='w-2'/>
                        <p className='text-xs'>WATCH TRAILER</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;