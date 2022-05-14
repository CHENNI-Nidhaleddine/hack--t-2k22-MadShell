import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';


// import { useHistory } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return (
      <div className="text-[#002866]  relative      ">
          <div className="relative h-[calc(15px)] bg-[#002866]">

          </div>
          <div className="h-[calc(60px)]  flex justify-between bg-[#F0B41E] sticky top-0 px-5">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" className="w-18 h-14 mr-5"/>
                    <h3 >une relation de confiance</h3>
                </div>
                <ul className="flex justify-between items-center">
                    <li className="mx-2 cursor-pointer">Accueil</li>
                    <li className="mx-2 cursor-pointer">Services</li>
                    <li className="mx-2 cursor-pointer">Partenaires</li>
                    <li className="mx-2 cursor-pointer">S'inscrire</li>
                    <li className="mx-2 cursor-pointer rounded bg-[#002866] px-2 py-1 text-[#F0B41E]" onClick={()=>navigate('/auth')}>Se Connecter</li>
                </ul>
          </div>
    
      </div>
    );
  }
  
  export default Header;
  