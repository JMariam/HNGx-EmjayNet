import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className="footer container mx-auto p-6 mt-10">
            <div className="socials flex justify-center gap-6 text-black">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center gap-2 md:gap-6 text-black font-bold text-xs my-5">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className="text-center text-sm font-bold">
               Copyright &copy; 2023
            </div>
        </div>
     );
}
 
export default Footer;