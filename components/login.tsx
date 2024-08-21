import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import gpe from "../app/bilder/Bediensoftware_GPE.png";
import Link from "next/link";
import {Input} from "@nextui-org/react";
import Registration from "./registration";

/* https://www.youtube.com/watch?v=bicCg4GxOP8 */

export interface UserProps
{
    titel: string;
    inhalt: string;
    className: string;
}

const Login = ({titel,inhalt,className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();
    const bild0 = gpe;

    return(
        <div className={className}>
        <Button style={{color:"white",backgroundColor:"#0e2d38"}} onPress={onOpen}><p className="text-lg">Login</p></Button>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2] px-10 gap-4 "}}>
            
            <ModalContent>
                {(onClose:any) =>
                (
                    <>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></ModalHeader>
                    <ModalBody><p style={{fontSize: "14pt"}} className="text-white">{inhalt}</p></ModalBody>
                    <Input isRequired type="name" label="Name" defaultValue="" className="max-w-xs" variant="bordered"/>
                    <Input isRequired type="password" label="Password" defaultValue="" className="max-w-xs" variant="bordered"/>
                    <Registration className="" titel="Registration" inhalt="Bitte registrieren Sie sich."/>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" href="#" as={Link} onPress={onClose}>Anmelden</Button></ModalFooter>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default Login;