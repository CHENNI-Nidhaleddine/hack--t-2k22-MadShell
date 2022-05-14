import logo from "../assets/logo.png"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {VscInbox} from "react-icons/vsc"
function Popup() {
    return (
        <div className="fixed   z-50 flex items-center justify-center  bg-[#000] h-full w-full">
      <div className=" opacity-100  rounded text-[#002866] flex flex-col items-center justify-between  h-5/6 w-1/3 m-auto bg-[#002866]  text-[#fff]   ">
            <div className="flex items-center justify-center text-[#F0B41E] py-8">
                      <VscInbox className="text-5xl mr-3"/>
                      <div className="flex flex-col items-center justify-left">
                      <h2 className="text-sm mr-3">Insérer un document</h2>
                      <h2 className="text-sm mr-3">de votre demande</h2>
                      </div>
             </div>
          <div className="rounded bg-[#fff] h-4/5 w-full">
              <form action="POST" className="flex flex-col items-center justify-center  ">
                  <input type="file"/>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Ajouter une note" className="bg-[#eaeaea] outline-none p-3 w-5/6  h-1/5" ></textarea>
                   <button type="submit" className="text-[#fff] bg-[#F0B41E] px-2 py-1">Envoyer</button>
              </form>
            
h
          </div>
          </div>
      </div>
    );
  }
  
  export default Popup;
  