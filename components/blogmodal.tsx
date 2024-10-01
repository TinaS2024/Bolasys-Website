"use client"
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/react";
import { useState } from "react";
import { FormEvent } from "react";
import Swal from "sweetalert2";
import path from "path";


/* To-Do:
1. Ein Bild aus einem externen Ordner hochladen und im Public-Ordner speichern für die Anzeige auf einen Blog-Artikel. ->https://www.youtube.com/watch?v=lqUfFbW9weM
2. Das Datum automatisch generieren statt händig eingeben.
*/

export interface UserProps
{
    idName:string;
}

const Blogmodal = ({idName}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();

    const date = new Date();
    const formatiert_date = date.toLocaleString("de-DE", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });

    const [titel, setTitel] = useState("")    
    const [subtitel, setSubtitel] = useState("")  
    const [inhalt, setInhalt] = useState("")
    const [bildpfad, setBildpfad] = useState("placeholder.png")
    const [datum, setDatum] = useState(formatiert_date)
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
                        "artikel": 
                        {
                        "titel": titel,
                        "subtitel": subtitel,
                        "inhalt": inhalt,
                        "bildpfad": bildpfad,
                        "datum":datum
                        }
                    })
                })
                Swal.fire({title:"Erfolgreich", text:"Blog-Artikel wurde erstellt!",icon:"success",background:"#0e2d38",color:"white",showConfirmButton:false});
                console.log(dataFilePath);
                res.json();

            }catch(error)
            {
                console.error("Fehler", error)
                Swal.fire({title:"Fehler", text:"Es gab ein Problem beim Erstellen des Blog-Artikels.",icon:"error",background:"#0e2d38",color:"white", showCancelButton: true, showConfirmButton:false,cancelButtonColor: "#DD6B55"});
            }
        }

    return(
        <div id={idName}>
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
                    <ModalHeader style={{fontSize:"14px"}} className="text-[#5ec4d2]">Neuer Blogartikel</ModalHeader>
                    <ModalBody>
                    <Input required label="Titel" value={titel} placeholder="Titel" className="max-w-xs" variant="bordered" onChange={(e) =>setTitel(e.target.value)} />
                    <Input required label="Subtitel" value={subtitel} placeholder="Subtitel" className="max-w-xs" variant="bordered" onChange={(e) =>setSubtitel(e.target.value)} />
                    <Textarea required label="Inhalt" value={inhalt} placeholder="Inhalt" className="max-w-xs" variant="bordered" minRows={5} onChange={(e) =>setInhalt(e.target.value)}/>
                    {/*<Input required label="Bildpfad" value={bildpfad}  placeholder="placeholder.png" className="max-w-xs" variant="bordered" onChange={(e) =>setBildpfad(e.target.value)}/>*/}
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