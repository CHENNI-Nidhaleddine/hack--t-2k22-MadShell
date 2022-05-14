import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
function Footer() {
    return (
      <div className="text-[#002866]  relative  flex items-center justify-evenly  h-[calc(120px)]  bg-[#002866]  text-[#fff]   ">
          <div className="relative  bg-[#002866] ">
              <h1 className="text-[#F0B41E] text-xl mb-3">Nous contacter</h1>
              <h4 className="text-md">
              Siège Direction GénéraleAdresse : Route 
              </h4>
              <h4 className="text-md">
              des dunes Chéraga BP 73, Alger.
              </h4>

          </div>
          <div>
               <ul className="flex flex-col justify-between ">
                  <li className="flex items-center justify-left"><BsFillTelephoneFill className="mr-2" />+213 21 38 13 13</li>
                  <li className="flex items-center justify-left"><FaTelegramPlane className="mr-2" />123-4567</li>
  
                  <li className="flex items-center justify-left"><AiOutlineMail className="mr-2" />webmaster@naftal.dz</li>
              </ul>
          </div>
          <div className="flex justify-between items-center">
                    <img src={logo} alt="" className="w-18 h-14 mr-5"/>
          </div>
        
    
      </div>
    );
  }
  
  export default Footer;
  