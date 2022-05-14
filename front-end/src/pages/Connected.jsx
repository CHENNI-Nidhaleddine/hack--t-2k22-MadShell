import logo from "../assets/logo.png"
import Header from "../components/Header"
import HeaderConnect from "../components/HeaderConnect";
import { useNavigate } from 'react-router-dom';
function Connected() {
  const navigate = useNavigate();
    return (
      <div className="text-[#002866]  relative h-screen w-full">
          <HeaderConnect/>
          <div className="flex items-center justify-between px-24 h-[calc(100vh-60px)]">
            <div className="w-1/2">
               <h2 className="text-7xl mb-3">Bienvenue!</h2>
               <p className="text-2xl">
               Merci d’avoir choisi notre solution,
lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
               </p>


            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-[#F0B41E] text-4xl px-3 py-3 rounded w-60 my-5" onClick={()=>navigate('/monCompte')}>Dashboard</button>
                   </div>
          </div>
      </div>
    );
  }
  
  export default Connected;
  