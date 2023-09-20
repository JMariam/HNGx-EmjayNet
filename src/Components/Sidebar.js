import logo from '../assets/tv.svg';
import calendar  from '../assets/Calendar.svg';
import TV from '../assets/TV Show.svg';
import logout from '../assets/Logout.svg'
import home from '../assets/Home (1).svg'
import movies from '../assets/Movie Projector.svg'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return ( 
        <div className="fixed">
            <div className="hidden w-[0rem] sidebar bg-white md:flex flex-col gap-8 md:w-[12rem] h-[100vh] rounded-br-3xl border border-gray-300 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <img src={logo} alt="" className='w-8'/>
                    <p className="font-bold text-xl">MovieBox</p>
                </div>
               <Link to='/'>
                <div className="flex gap-2 cursor-pointer">
                    <img src={home} alt="" className='w-6'/>
                        <p className="font-bold text-gray-500 left-20">Home</p>
                    </div>
                </Link>
                <Link to='/data/:id'>
                    <div className="flex gap-2 cursor-pointer">
                    <img src={movies} alt="" className='w-5'/>
                        <p className="font-bold text-gray-500 left-20">Movies</p>
                    </div>
                </Link>
                <div className="flex gap-2 cursor-pointer">
                <img src={TV} alt="" className='w-6'/>
                    <p className="font-bold text-gray-500 left-20">TV Seies</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                <img src={calendar} alt="" className='w-6'/>
                    <p className="font-bold text-gray-500 left-20">Upcoming</p>
                </div>
                <div className="border border-pink-500 bg-pink-50 pt-6 p-2 rounded-2xl mt-8">
                    <p className='text-xs text-gray-500 font-bold'>Play movie quizzes and earn free tickets</p>
                    <p className='text-[0.6rem] text-gray-500 py-4'>50k people are playing right now</p>
                    <p className='py-1 px-2 bg-pink-400 text-pink-700 text-xs w-fit mx-auto rounded-2xl'>Start Playing</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                <img src={logout} alt="" className='w-6'/>
                    <p className="font-bold text-gray-500 left-20">Log Out</p>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;