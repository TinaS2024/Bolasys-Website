
"use client"
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import swal from "sweetalert";

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

    const handleSubmit = async (e: FormEvent)=>
        {
          e.preventDefault()

          if(email =="tina.schmidtbauer@bolasys.de" && password == "F)mP7$f,k2B)#*L")
          {
            swal({title: "Erfolgreich",text:"Anmeldung war Erfolgreich!", icon:"success"})
          }
          else{
            swal({title: "Fehler",text:"Falscher Benutzername oder Passwort.",icon:"error"})
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
                    <Input required type="text" label="E-Mail" name="email" className="max-w-xs" variant="bordered" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <Input required type="password" label="Password" name="password"  className="max-w-xs" variant="bordered" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" type="submit" onPress={onClose}>Login</Button></ModalFooter>
                   </form>  </>      
                  )} 
                 
            </ModalContent>  
        </Modal>
        </div>
       
    )
}

export default Login;