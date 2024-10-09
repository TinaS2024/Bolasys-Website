import { Button } from "@nextui-org/react";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export interface UserProps
{
    titel: string;
    inhalt:Array<any>;
    link:string;
    links:string;
    oben:string;
    className: string;
}

const OwnModal = ({titel,inhalt,link,links,oben,className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    return(
        <div style={{position:"absolute",left:`${links}`,top:`${oben}`}}>
        <Button className={className} style={{background:"none",zIndex:"5",fontSize:"10pt",color:"#5ec4d2"}} onPress={onOpen}>{titel}</Button> 
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