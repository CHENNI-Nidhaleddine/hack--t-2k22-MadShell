import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import Employee from "./Employee";
import History from "./History";
function Historique() {
    return (
        <div  className="w-full border-2 px-5 h-full">
        <div className="w-full grid grid-cols-5   h-[calc(30px)]   text-[#002866]  border-b-2 ">
<div className="col-span-1">
   nom
</div>
<div className="col-span-1">
   prenom
</div>
<div className="col-span-1  ">
   station
</div>
<div className="col-span-1  ">
   montant
</div>
<div className="col-span-1  ">
   date
</div>


 </div> 
        <div className="h-full w-full overflow-y-scroll scrollbar-hide pt-2">
           <History nom="BOUKERFA" prenom="MUH" station="stationX" montant="99.99DA" date="19/06/2021"/>
             </div>
        </div>
    );
  }
  
  export default Historique;
  