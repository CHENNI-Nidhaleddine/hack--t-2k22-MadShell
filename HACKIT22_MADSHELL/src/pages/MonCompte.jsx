import logo from "../assets/logo.png"
import React from "react"
import Header from "../components/Header"
import HeaderConnect from "../components/HeaderConnect";
import BNP from "../assets/BNP.png"
import temtem from "../assets/temtem.jpg"
import Employee from "../components/Employee";
import LayoutEmpHist from "../components/LayoutEmpHist";
import { useNavigate } from 'react-router-dom';
import Employees from "../components/Employees";
import Historique from "../components/Historique";
import Popup from 'reactjs-popup';
import { Montant } from "../components/Montant";

function MonCompte() {
  const [montant,setMontant]=React.useState(20000)
  fetch("http://192.168.0.199:8000/api/v1/companies/e7806bd4-e0c4-4aca-80ad-300a526b75f2/")
  .then(response=> response.json())
  .then(data=>setMontant(data.credit))

    const [employed,setEmployed]=React.useState(true)
    const navigate = useNavigate();
    return (
      <div className="text-[#002866]  relative h-screen w-full">
          <HeaderConnect/>
          <div className="flex flex-col items-center justify-between px-24 h-[calc(100vh-60px)] py-10">
         
           <div className="flex items-center justify-between w-full px-16">
                   <div className="flex flex-col items-center justify-center w-3/4">
                       <div className="flex items-center justify-center mb-4 self-start">
                           <img src={temtem} alt="" className="w-24 h-24 mr-3"/>
                           <div>
                               <h1 className="text-3xl">temtem one</h1>
                               <h3>Entreprise Ecommerce</h3>
                           </div>
                       </div>
                       <div className=" border-b-2 border-[#002866] w-full text-xl">
                           <h1>Mon tableau de bord</h1>
                       </div>


                   </div>
                   <div className="flex flex-col items-center justify-center text-xl">
                       <h1 className="mb-3">Votre crédit actuel</h1>
                        <h2 className="border-2 px-4 py-1 w-42">{montant} DZD</h2>
                       <button className="w-36 bg-[#F0B41E] rounded mt-3 text-base px-1">Procéder à un virement</button>

                   </div>
           </div>
           <div className="w-full h-2/5">
               <div className="mb-2">
                   <button className={employed? "border-2 w-fit px-1 mr-2 bg-[#002866] text-[#fff]":"border-2 w-fit px-1 mr-2"} onClick={()=>setEmployed(!employed)}>Employés</button>
                   <button className={!employed? "border-2 w-fit px-1 ml-2 bg-[#002866] text-[#fff]":"border-2 w-fit px-1 ml-2"} onClick={()=>setEmployed(!employed)}>Historique de transaction</button>
               </div>
               <div className="w-full h-full">
                  {employed? <Employees/>:<Historique/>}
               </div>

           </div>
            <div className="flex  items-center justify-between w-full mb-3">
                <div>
                    <button className="bg-[#F0B41E] text-lg px-1  rounded w-32 my-1 mr-2">Importer</button>
                    <button className="bg-[#F0B41E] text-lg px-1  rounded w-32 my-1 ml-2">Exporter</button>
                </div>
                <div>
                <Popup className="bg-[#123]" trigger={<button className="bg-[#F0B41E] text-lg px-1  rounded w-32 my-1">Ajouter</button>} modal>
                <div className="shadow-2xl rounded-xl">
           <div className="flex items-center justify-center text-[#F0B41E] py-8 bg-[#002866] px-24 rounded-t-xl">
                     
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-xl ">Ajouter un employé</h2>
                   
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
                    <button className="border-2 px-2 py-1 bg-[#F0B41E] rounded-xl ml-2">Ajouter</button>
                  </div>
             </form>
          </div>
          </div>
            </Popup>
                    
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default MonCompte;
  