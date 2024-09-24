import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export interface UserProps
{
    titel: string;
    inhalt:Array<any>;
    className: string;
    link:string;
}

const OwnModal = ({titel,inhalt,className,link}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    return(
        <div className={className} style={{marginTop:"25px"}}>
        <Button style={{background: "none"}} onPress={onOpen}></Button>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2]"}}>
            
            <ModalContent>
                {(onClose:any) =>
                (
                    <>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></ModalHeader>
                    <ModalBody><p style={{fontSize: "14pt"}} className="text-white">{inhalt}</p>
                    <Link onClick={onClose} href={"#"+link}>Mehr Text</Link>
                    </ModalBody>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default OwnModal;