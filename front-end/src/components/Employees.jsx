import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import Employee from "./Employee";
import { EmployeesData } from "./EmployeesData";
import React from "react"

function Employees() {
   const [workers,setWorkers]=React.useState([])
   fetch("http://192.168.0.199:8000/api/v1/companies/e7806bd4-e0c4-4aca-80ad-300a526b75f2/")
   .then(response=> response.json())
   .then(data=>setWorkers(data.Workers))
    return (
        <div  className="w-full border-2 px-5 h-full">
        <div className="w-full grid grid-cols-8   h-[calc(30px)]   text-[#002866]  border-b-2 ">
<div className="col-span-1">
   nom    
</div>
<div className="col-span-1  ">
   prenom
</div>
<div className="col-span-2  ">
   email
</div>
<div className="col-span-1  ">
   phone
</div>

<div className="col-span-2  ">
   Matricule
</div>
 </div> 
        <div className="h-full w-full overflow-y-scroll scrollbar-hide pt-2">
         {console.log(workers)}
         {workers.map((worker)=><Employee nom={worker.name} prenom="xxx" email="jm_boukerfa@esi.dz" matricule="123 110 32 19" phone="0556767654"/>)}

               
{/*             
            <Employee nom="BOUKERFA" prenom="MUH" email="jm_boukerfa@esi.dz" matricule="123 110 32 19" phone="0556767654"/>
            <Employee nom="CHENNI" prenom="Nidhal" email="jn_chenni@esi.dz" matricule="123 120 32 19" phone="07746767654"/>
            <Employee nom="BOUKETTA" prenom="Ammar" email="ja_bouketta@esi.dz" matricule="133 130 32 39" phone="07746767654"/>
            <Employee nom="BOUROUCH" prenom="DROGBA" email="ji_bourouche@esi.dz" matricule="123 120 32 19" phone="07746767654"/>
            <Employee nom="MENNAD" prenom="Hania" email="kh_mennad@ise.dz" matricule="123 120 32 19" phone="07746767654"/> */}
            </div>
        </div>
    );
  }
  
  export default Employees;
  