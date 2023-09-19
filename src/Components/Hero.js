import {FaSearch, FaBars} from 'react-icons/fa';
import logo from '../assets/Logo (1).svg';

const Hero = () => {

    const openMenu = () =>{
       const menu = document.querySelector('.sidebar')
       menu.classList.toggle('open')
    }

    return ( 
        <div className="herobg">
            <div className="hero container mx-auto p-6">
                <div className="flex justify-between items-center">
                    <div className="flex mb-6">
                        <img src={logo} alt="" className='w-32'/>
                        {/* <p className="font-bold text-xl absolute left-20">MovieBox</p> */}
                    </div>
                    <div className="hidden w-[28rem] border border-white h-fit text-white fmd:flex justify-between p-2 text-xs">
                        <p className='hidden '>What do you want to search?</p>
                        <FaSearch/>
                    </div>
                    <div className="cursor-pointer bg-pink-800 rounded-full text-white p-2 text-xl" onClick={openMenu}>
                        <FaBars/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;