import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/react";


export interface UserProps
{
    sichtbarkeit:boolean;
}

const Blogmodal = ({sichtbarkeit}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();
    sichtbarkeit = false;

    return(
        <div hidden={sichtbarkeit}>
        <Button style={{color:"white",backgroundColor:"#0e2d38"}} onPress={onOpen}><p className="text-lg">Neuer Artikel</p></Button>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2] px-10 gap-4 "}}>
            
            <ModalContent>
                {(onClose:any) =>
                (
                    <>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">Neuer Blogartikel</h3></ModalHeader>
                    <ModalBody>
                    <Input isRequired label="Titel" value="" defaultValue="" className="max-w-xs" variant="bordered"/>
                    <Textarea isRequired label="Inhalt" value="" defaultValue="" className="max-w-xs" variant="bordered" minRows={5}/>
                    <Input isRequired label="Datum" value="" defaultValue="" className="max-w-xs" variant="bordered"/>
                    </ModalBody>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" onPress={onClose}>Artikel erstellen</Button></ModalFooter>
                    </>       
                )}
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default Blogmodal;