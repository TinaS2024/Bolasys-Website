import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

export interface UserProps
{
    titel: string;
    inhalt:Array<any>;
    className: string;
    id:string;
}

const OwnModal_nolink = ({titel,inhalt,className,id}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    return(
        <div id={id} className={className} style={{position:"absolute"}}>
        <Button isIconOnly style={{height:"25px",background:"none",zIndex:"5"}} onPress={onOpen}></Button>
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
                    </ModalBody>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default OwnModal_nolink;