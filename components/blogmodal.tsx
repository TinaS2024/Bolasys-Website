"use client"
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/react";
import { useState } from "react";
import { FormEvent } from "react";
import swal from "sweetalert";
import path from "path";


/* https://dev.to/this-is-learning/readwrite-on-local-json-file-with-nextjs-part-51-8gg */

/* Axios benutzen ? https://stackabuse.com/sending-post-json-requests-with-axios */

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
    const dataFilePath = path.join(process.cwd()+"/app/json/blog.json");

    const saveData = async (e: FormEvent) =>
        {
            e.preventDefault()
            try{
                  const res: Response = await fetch("/api/posts/",{
                    method: "POST",
                    headers: {
                    "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        "artikellist": [
                        {
                        "titel": titel,
                        "subtitel": subtitel,
                        "inhalt": inhalt,
                        "datum":datum
                        }]
                    })
                })
                swal({title: "Erfolgreich",text:"Blog-Artikel wurde erstellt!", icon:"success"});  
                console.log(dataFilePath)
                res.json()

            }catch(error)
            {
                console.error("Fehler", error)
                swal({title: "Fehler",text:"Es gab ein Problem beim Erstellen des Blog-Artikels.",icon:"error"});
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
                    <form onSubmit={saveData}>
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