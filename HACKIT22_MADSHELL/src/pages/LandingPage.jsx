
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

function LandingPage() {
    return (
      <div className="">
          {/* <Popup/> */}
          <Header/>
          <div className="main text-[#fff] flex flex-col items-center justify-center h-[calc(100vh-65px)] ">
              <h1 className="text-5xl w-2/3 flex items-center justify-center text-center mb-10">Une solution digitale pour vos paiements, en toute sécurité</h1>
              <h3 className="foo w-2/3 flex items-center justify-center text-center mb-16 text-xl px-3">Notre solution vous permettera de lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</h3>
              <button className="bg-[#F0B41E] text-[#002866] py-2 px-5 border border-[#fff]">En savoir plus</button>

          </div>

          <div className=" text-[#fff] flex  items-center justify-center h-[calc(100vh-65px)] px-24 ">
               <div className="text-4xl w-1/3 ">
                      <h1><span className="relative z-50 text-[#002866]">Notre</span> <img src={service1} alt="" className="z-10 relative -top-3 w-28  h-3"/></h1>
                      <h2><span className="relative z-50 text-[#002866]">service</span> <img src={service2} alt="" className="z-10 relative -top-3  w-36 h-3"/></h2>
               </div>
               <div className="w-2/3 border-l-4 border-[#5B90E1] h-2/3 grid grid-cols-2 grid-rows-2 text-[#000] p-5 items-center">
                   <div className="p-8 ">
                       <h3 className="flex items-center text-[#002866] text-xl font-bold mb-3 "><HiOutlineDesktopComputer className="mr-3 text-3xl"/> Digital</h3>
                       <p>lorem ipsum dolor sit amet consectetur adipiscing elit nullam nunc</p>
                   </div>
                   <div className="p-8 ">
                       <h3 className="flex items-center text-[#002866] text-xl font-bold mb-3 "><MdOutlineSettingsBackupRestore className="mr-3 text-3xl"/> Rapide</h3>
                       <p>lorem ipsum dolor sit amet consectetur adipiscing elit nullam nunc</p>
                   </div>
                   <div className="p-8 ">
                   <h3 className="flex items-center text-[#002866] text-xl font-bold mb-3 "><AiOutlineLock className="mr-3 text-3xl"/> Sécurisé</h3>
                   <p>lorem ipsum dolor sit amet consectetur adipiscing elit nullam nunc</p>
                   </div>
                   <div className="p-8 ">
                   <h3 className="flex items-center text-[#002866] text-xl font-bold mb-3 "><BsSearch className="mr-3 text-2xl"/> Traçable</h3>
                   <p>lorem ipsum dolor sit amet consectetur adipiscing elit nullam nunc</p>
                   </div>
               </div>
          </div>
          <div>
              <div className="text-4xl w-2/3 p-24 ">
                      <h1><span className="relative z-50 text-[#002866] ">Nos Partenaires</span> <img src={service1} alt="" className="z-10 relative -top-3 w-72 h-3"/></h1>
              </div>
              <div>
              {/* <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
               <Swiper watchSlidesProgress={true} slidesPerView={6} loop className="mySwiper">
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide1} className="w-44 h-44" alt=""/></SwiperSlide>
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide2} className="w-44 h-44" alt=""/></SwiperSlide>
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide3} className="w-44 h-44" alt=""/></SwiperSlide>
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide4} className="w-44 h-44" alt=""/></SwiperSlide>
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide5} className="w-44 h-44" alt=""/></SwiperSlide>
        <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide6} className="w-44 h-44" alt=""/></SwiperSlide>
        {/* <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide7} className="w-44 h-44" alt=""/></SwiperSlide> */}
      </Swiper>
              </div>
          </div>
          <div className="p-24 ">
              <div className="text-4xl w-1/3 ">
                      <h1><span className="relative z-50 text-[#002866]">S'inscrire</span> <img src={service1} alt="" className="z-10 relative -top-3 w-44 h-3"/></h1>
              </div>
              <div className="flex items-center justify-evenly mt-8">
                  <button className="flex items-center justify-center">
                  <img src={Doc} className="h-12 w-14 mr-5" alt=""/>
                     
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-sm mr-3">Insérer un document</h2>
                      <h2 className="text-sm mr-3"> de votre demande</h2>
                      </div>
                      <p className="w-7 h-7 text-[#F0B41E] text-4xl bg-[#002866] rounded-full flex items-center justify-center"><BsFillPlusCircleFill/></p>
        </button>
                  <button className="flex items-center justify-center">
                  
                      <img src={Meet} className="h-12 w-14 mr-5" alt=""/>
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-sm mr-3">Planifier une réunion</h2>
                      <h2 className="text-sm mr-3">sur Agenda</h2>
                      </div>
                      <p className="w-7 h-7 text-[#F0B41E] text-4xl bg-[#002866] rounded-full flex items-center justify-center"><BsFillPlusCircleFill/></p>
                  </button>
              </div>
         </div>
          
          <Footer/>


      </div>
    );
  }
  
  export default LandingPage;
  