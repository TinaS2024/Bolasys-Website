
"use client"
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import Swal from "sweetalert2";
import Blogmodal from "./blogmodal";

import { useState } from "react";
import {FormEvent } from "react";

/* Supabase: tina.schmidtbauer@bolasys.de F)mP7$f,k2B)#*L*/

export interface UserProps
{
    className: string;
}

const Login = ({className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    const [email, setEmail] = useState("")    
    const [password, setPassword] = useState("")
    const hiddenDiv: HTMLElement | null = document.getElementById("artikel_blog"); 
    const einloggen: HTMLElement | null = document.getElementById("log_in");
    const ausloggen: HTMLElement | null = document.getElementById("log_out");
    
    const handleSubmit = async (e: FormEvent)=>
        {
          e.preventDefault()

          if(email =="tina.schmidtbauer@bolasys.de" && password == "F)mP7$f,k2B)#*L")
          {   
            if (hiddenDiv != null && einloggen!= null && ausloggen != null)
            {
              hiddenDiv.style.display = "block";    
              einloggen.style.display = "none";    
              ausloggen.style.display = "block";
            }
          }    
          else{
            Swal.fire({title:"Fehler", text:"Falscher Benutzernahme oder falsches Passwort.",icon:"error",background:"#0e2d38",color:"white", showCancelButton: true, showConfirmButton:false,cancelButtonColor: "#DD6B55"});
          }
        }

    const neuladen = () =>
    {
      if(ausloggen && einloggen != null)
        {
          /* Seite neuladen ohne weißen Hintergrund */
        }
      }
      
    return(
        <div className={className}>
        <Button style={{color:"white",backgroundColor:"#0e2d38"}} onPress={onOpen}><p className="text-lg">Login</p></Button>
        <Modal
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2] px-10 gap-4 "}}>
            <ModalContent>
               
                {(onClose:any) => (
                    <> 
                    <form onSubmit={handleSubmit}>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">Login für Blog-System</h3></ModalHeader>
                    <ModalBody>
                       
                    <p style={{fontSize: "14pt"}} className="text-white"></p></ModalBody>
                    <Input required type="text" label="E-Mail" className="max-w-xs" variant="bordered" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <Input required type="password" label="Password" name="password"  className="max-w-xs" variant="bordered" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                 <ModalFooter>
                  <Button style={{display:"none"}} id="log_out" className="bg-[#5ec4d2] text-black" onPress={onClose} >Ausloggen</Button>  
                  <Button id="log_in" className="bg-[#5ec4d2] text-black" onClick={neuladen} type="submit">Einloggen</Button>    
                  <div style={{marginTop:"-25px"}}><Blogmodal idName="artikel_blog"/></div>
                  </ModalFooter>
                  </form></>      
                  )} 
            </ModalContent>  
        </Modal>
     
  
        </div>
       
    )
}

export default Login;