"use client"

import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import { Card, CardHeader, CardBody} from "@nextui-org/react";
import { RadioGroup,Radio, Textarea, Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

import {FormEvent } from "react";
import {useState} from "react";

//Hier wird eigentlich ein Captcha benötigt


const KontaktPage = () =>{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [nachricht,setNachricht] = useState("");

  const text = ["Wir können User-Interfaces mit Java-Script-Frameworks erstellen und Sie in CMS-Systeme einbinden."];

  const handleSubmit = async (e: FormEvent)=>
  {
    e.preventDefault()

    try
    {
      const res: Response = await fetch("/api/kontakt/",{
        method: "POST", 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          subject,
          nachricht,
        }), 
      });
      Swal.fire({title:"Erfolgreich", text:"E-Mail wurde an Bolasys gesendet!",icon:"success",background:"#0e2d38",color:"white",showConfirmButton:false});
      
      res.json();
 
    } catch (error:any)
    {
      console.error("Fehler", error)
      Swal.fire({title:"Fehler", text:"Es gab ein Problem beim Versenden der E-Mail!",icon:"error",background:"#0e2d38",color:"white", showCancelButton: true, showConfirmButton:false,cancelButtonColor: "#DD6B55"});
    }
  }

  return (
    <div>
      <HeaderNeu></HeaderNeu>  
      <Background left="-238px" opacity="10%"></Background>
   
        <div style={{margin:"auto"}} className="py-8 text-left">   
        <div>
               <Titel_Subtitel_nolink titel="Kontakt" subtitel={text}/>  
            </div>
        <Card className="max-w-[500px]">
          <CardHeader style={{zIndex: "0"}}>Bitte wählen Sie einen Benutzernamen und geben Sie <br/> eine E-Mail-Adresse an über die wir uns zurückmelden werden.</CardHeader>
        <CardBody>
      <form onSubmit={handleSubmit}>
  
        <table className="tab">
          <tbody>
          <tr><td height={30}></td><td></td></tr>
           <tr><td colSpan={2}>
            <Input 
            required type="username" 
            placeholder="Benutzername"
            id="username"
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
             <tr><td height={5}></td><td></td></tr>
           <tr><td colSpan={2}> 
            <Input 
            required type="email" 
            id="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            placeholder="E-Mail" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
             <tr><td height={30}></td><td></td></tr>
            <tr><td colSpan={2}>
             <RadioGroup style={{zIndex: "0"}} label="Wählen Sie einen Bereich aus zu dem Sie Fragen haben." color="warning" defaultValue="Sonstiges">
              <Radio name="subject" value="GPE" onChange={(e) =>setSubject(e.target.value)}>GPE</Radio>
              <Radio name="subject" value="Designer" onChange={(e) =>setSubject(e.target.value)}>Designer</Radio>
              <Radio name="subject" value="CyDesigner" onChange={(e) =>setSubject(e.target.value)}>CyDesigner</Radio>
              <Radio name="subject" value="Nesting" onChange={(e) =>setSubject(e.target.value)}>NestingSoftware</Radio>
              <Radio name="subject" value="Sonstiges" onChange={(e) =>setSubject(e.target.value)}>Sonstiges</Radio>
             </RadioGroup></td><td></td></tr>
             
             <tr><td height={30}></td><td></td></tr>
            
            <tr><td colSpan={2}><Textarea required style={{width:"400px"}}
              id="nachricht"
              value={nachricht}
              onChange={(e) =>setNachricht(e.target.value)}
              placeholder="Fragen Sie uns etwas !"
              className="max-w-xs"
              variant="faded"
              minRows={5}
              /></td><td></td></tr>
              
              <tr><td height={30}></td><td></td></tr>
        
        <tr><td><Button type="submit" className="bg-[#0e2d38] text-white mt-2">Absenden</Button></td><td></td></tr>
        </tbody>
        </table>    
        </form>
        </CardBody>
        </Card>
        
        
          
       
        </div>
        </div>
  );
}

export default KontaktPage;
