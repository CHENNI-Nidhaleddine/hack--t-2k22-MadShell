import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineDelete} from "react-icons/ai"
import {BsPencilSquare} from "react-icons/bs"
import Popup from 'reactjs-popup';
import {VscInbox} from "react-icons/vsc"
import React from "react"
import PopupEdit from "./PopupEdit";
function History({nom,prenom,station,montant,date}) {
  const [edit,setEdit]=React.useState(false)
      
    return (
      <div className="w-full grid grid-cols-5 gap-3   h-[calc(30px)]    text-[#002866]   ">
          <div className="col-span-1  ">
              {nom}
          </div>
          <div className="col-span-1  ">
              {prenom}
          </div>
          <div className="col-span-1  ">
              {station}
          </div>
           <div className="col-span-1  ">
              {montant}
          </div>
          
          <div className="col-span-1  ">
              {date}
          </div>
         
            
        
        
        
         
      </div>
    );
  }
  
  export default History;
  