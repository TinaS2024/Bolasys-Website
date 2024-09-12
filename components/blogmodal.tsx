import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/react";
import { useState } from "react";
import { FormEvent } from "react";
import swal from "sweetalert";

/* https://stackoverflow.com/questions/32546100/how-to-write-data-to-a-json-file-using-javascript */

var obj:
{
    titel:string,
    subtitel:string,
    inhalt:string,
    datum:string,
}

export interface UserProps
{
    idName:string;
}

const Blogmodal = ({idName}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    const [titel, setTitel] = useState("")    
    const [subtitel, setSubtitel] = useState("")  
    const [inhalt, setInhalt] = useState("")
    const [datum, setDatum] = useState("")

    const handlePost = async (e: FormEvent)=>
        {
          e.preventDefault()

            try
            {
                var obj = {"titel": titel,"subtitel": subtitel,"inhalt": inhalt,"datum":datum};
                localStorage.setItem("../app/json/blog.json", JSON.stringify(obj));
                obj = JSON.parse(localStorage.getItem("../app/json/blog.json") || '""');
                swal({title: "Erfolgreich",text:"Artikel konnte erstellt werden!", icon:"success"}) 
                console.log(obj)
            }
            catch (error:any)
            {
              console.error("Fehler", error)
              swal({title: "Fehler",text:"Artikel konnte nicht erstellt werden!",icon:"error"})
            }
        }

    return(
        <div id={idName} style={{marginTop:"25px",display:"none"}}>
        <Button style={{color:"black",backgroundColor:"#5ec4d2"}} onPress={onOpen}><p className="text-lg">Neuer Artikel</p></Button>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2] px-10 gap-4 "}}>
            
            <ModalContent>
                {(onClose:any) =>
                (
                    <>
                    <form onSubmit={handlePost}>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">Neuer Blogartikel</h3></ModalHeader>
                    <ModalBody>
                    <Input required label="Titel" value={titel} placeholder="Titel" className="max-w-xs" variant="bordered" onChange={(e) =>setTitel(e.target.value)} />
                    <Input required label="Subtitel" value={subtitel} placeholder="Subtitel" className="max-w-xs" variant="bordered" onChange={(e) =>setSubtitel(e.target.value)} />
                    <Textarea required label="Inhalt" value={inhalt} placeholder="Inhalt" className="max-w-xs" variant="bordered" minRows={5} onChange={(e) =>setInhalt(e.target.value)}/>
                    <Input required label="Datum" value={datum}  placeholder="01.01.2024" className="max-w-xs" variant="bordered" onChange={(e) =>setDatum(e.target.value)}/>
                    </ModalBody>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" type="submit" onPress={onClose}>Artikel erstellen</Button></ModalFooter>
                 </form>
                 </>       
                )}
                 
            </ModalContent>  
        </Modal>
        </div>
        
    )
}

export default Blogmodal;