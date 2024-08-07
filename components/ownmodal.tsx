import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import gpe from "../app/bilder/Bediensoftware_GPE.png";
import { url } from "inspector";

export interface UserProps
{
    titel: string;
    inhalt: string;
    className: string;
}

const OwnModal = ({titel,inhalt,className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();
    const bild0 = gpe;

    return(
        <div className={className} style={{marginTop:"25px"}}>
        <Button style={{background: "none"}} onPress={onOpen}></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}
        classNames={{base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",}}>
            
            <ModalContent>
                {(onClose:any) =>
                (
                    <>
                    <ModalHeader>{titel}</ModalHeader>
                    <ModalBody>{inhalt}</ModalBody>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" onPress={onClose}>Close</Button></ModalFooter>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default OwnModal;