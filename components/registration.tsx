import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import {Input} from "@nextui-org/react";

export interface UserProps
{
    titel: string;
    inhalt: string;
    className: string;
}

const Registration = ({titel,inhalt,className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    return(
        <div className={className}>
        <Button style={{color:"white",backgroundColor:"#0e2d38"}} onPress={onOpen}><p className="text-lg">Noch nicht registriert ?</p></Button>
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
                    <Input isRequired type="email" label="Email" defaultValue="" className="max-w-xs" variant="bordered"/>
                    <Input isRequired type="password" label="Password" defaultValue="" className="max-w-xs" variant="bordered"/>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" href="#" as={Link} onPress={onClose}>Registrieren</Button></ModalFooter>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default Registration;