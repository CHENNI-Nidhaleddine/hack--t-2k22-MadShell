
import Header from "../components/Header"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import {HiOutlineDesktopComputer} from "react-icons/hi"
import {AiOutlineLock} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import {MdOutlineSettingsBackupRestore} from "react-icons/md"
import {VscInbox} from "react-icons/vsc"
import {SiGooglemeet} from "react-icons/si"
import Footer from "../components/Footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import Meet from "../assets/meetIcon.png"
import Doc from "../assets/doc.png"
import {BsFillPlusCircleFill} from "react-icons/bs"
import slide1 from "../assets/slide1.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"
import slide4 from "../assets/slide4.png"
import slide5 from "../assets/slide5.png"
import slide6 from "../assets/slide6.png"
import slide7 from "../assets/slide7.png"


// Import Swiper styles
import 'swiper/css';
import Popup from "../components/Popup"
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
    return (
      <div className="">
          {/* <Popup/> */}
          <Header/>
          <h1 className="mt-36 flex flex-col item-center justify-center w-fit m-auto mb-8 text-[#002866]">Veuillez introduire vos informations</h1>
          <form action="" className="text-[#002866] flex flex-col items-center justify-center">
              Nom d'utilisateur:<br/>
              <input type="text" className="bg-[#E8EDF3] rounded-xl w-1/3 outline-none h-8 px-3"/><br/>
              Mot de passe:<br/>
              <input type="text" className="bg-[#E8EDF3] rounded-xl w-1/3 outline-none h-8 px-3"/><br/>
              <button className="bg-[#F0B41E] px-2 py-1 text-[#002866] m-auto rounded-xl" onClick={()=>navigate('/connected')}>Se Connecter</button>
          </form>


      </div>
    );
  }
  
  export default Auth;
  