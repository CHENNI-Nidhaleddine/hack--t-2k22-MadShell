import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineDelete} from "react-icons/ai"
import {BsPencilSquare} from "react-icons/bs"
import Popup from 'reactjs-popup';
import {VscInbox} from "react-icons/vsc"
import React from "react"
import PopupEdit from "./PopupEdit";
import { useNavigate } from 'react-router-dom';


function Entreprise({nom,credit,image,path}) {
  const [edit,setEdit]=React.useState(false)
  const navigate = useNavigate();
    return (
      <button onClick={()=>navigate({path})} className="cursor-pointer w-full grid grid-cols-3   h-[calc(30px)]    text-[#002866]   my-5 items-center">
          <div className="col-span-1 flex items-center ">
              <img src={image} className="w-10 h-10 mr-2 " alt=""/> {nom}
          </div>
          <div className="col-span-1  ">
              {credit}
          </div>

          <div className="col-span-1 flex  ">
          <Popup className="bg-[#123]" trigger={<button className="button">     <AiOutlineDelete onClick={()=>setEdit(true)} className="mx-1 cursor-pointer"/> </button>} modal>
                <div className="shadow-2xl rounded-xl">
           <div className="flex items-center justify-center text-[#F0B41E] py-8 bg-[#002866] px-24 rounded-t-xl">
                     
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-xl ">Supprimer un employé</h2>
                   
                      </div>
             </div>
          <div className="rounded bg-[#fff] h-4/5 w-full pt-3 flex items-center justify-center flex-col px-5">
                <p className="">Est-ce que vous êtes sûr de vouloir supprimer</p>
                <p className="">BOUKERFA Muhammed El Amine</p>
                <p className="">de la liste des employés</p>
              
  
                
                  <div className=" flex items-center justify-center my-3">
                    <button className="border-2 px-2 py-1 bg[#fff] text-[#002866] rounded-xl mr-2" >Annuler</button>
                    <button className="border-2 px-2 py-1 bg-[#F0B41E] rounded-xl ml-2">Supprimer</button>
                  </div>
             
          </div>
          </div>
            </Popup>
            
              {/* <AiOutlineDelete className="mx-1 cursor-pointer"/> */}
              <Popup className="bg-[#123]" trigger={<button className="button"><BsPencilSquare onClick={()=>setEdit(true)} className="mx-1 cursor-pointer"/></button>} modal>
                <div className="shadow-2xl rounded-xl">
           <div className="flex items-center justify-center text-[#F0B41E] py-8 bg-[#002866] px-24 rounded-t-xl">
                     
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-xl ">Modifier les informations</h2>
                   
                      </div>
             </div>
          <div className="rounded bg-[#fff] h-4/5 w-full pt-3">
              <form action="POST" className="flex flex-col items-center justify-center px-3  ">
                  <div className="flex items-center justify-between">
                    <div className="mr-2">
                      Nom:
                    <input  className="bg-[#E8EDF3] rounded-xl h-10  w-full  outline-none px-2 " type="text"/>
                    </div>
                    <div className="ml-2">
                      Prenom:<br/>
                    <input className="bg-[#E8EDF3] rounded-xl h-10  w-full outline-none px-2  "  type="text"/>
                    </div>
                  </div >
                  <div className="self-start w-full">
                   Email:<br/>
                  <input  className="bg-[#E8EDF3] rounded-xl h-10  w-full outline-none px-2 " type="text"/><br/>
                  </div>
                  <div className="self-start w-full">
                  phone:<br/>
                  <input className="bg-[#E8EDF3] rounded-xl h-10  w-full outline-none px-2 "  type="text"/><br/>
                  </div>
                  <div className="self-start w-full">
                  Matrcule: <br/>
                  <input  className="bg-[#E8EDF3] rounded-xl h-10  w-full outline-none px-2" type="text"/><br/>
                  </div>
                  <div className=" flex items-center justify-center my-3">
                    <button className="border-2 px-2 py-1 bg[#fff] text-[#002866] rounded-xl mr-2" >Annuler</button>
                    <button className="border-2 px-2 py-1 bg-[#F0B41E] rounded-xl ml-2">Sauvegarder</button>
                  </div>
             </form>
          </div>
          </div>
            </Popup>
            
          </div>
         
         
            
        
        
         
      </button>
    );
  }
  
  export default Entreprise;
  