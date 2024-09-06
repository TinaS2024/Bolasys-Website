"use client"

import Header from "@/components/header";
import { RadioGroup,Radio, Textarea, Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import swal from "sweetalert";

import {FormEvent } from "react";
import {useState} from "react";
import { NextResponse } from "next/server";




const KontaktPage = () =>{
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [nachricht,setNachricht] = useState("")

  const handleSubmit = async (e: FormEvent)=>
  {
    e.preventDefault()

    try
    {
      const res: Response = await fetch("http://localhost:3000/api/email/",{
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
      swal({title: "Erfolgreich",text:"E-Mail wurde an Bolasys gesendet!", icon:"success"})
      res.json()
 
    } catch (error:any)
    {
      console.error("Fehler", error)
      swal({title: "Fehler",text:"Es gab ein Problem beim Versenden der E-Mail!",icon:"error"})
    }
  }

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Kontakt" opacity="100%"/>
        <div style={{marginLeft:"-100%"}} className="py-8">     
        
          <form onSubmit={handleSubmit}>
  
        <table className="tab">
          <tbody>
            <tr><td>Bitte wählen Sie einen Benutzernamen und geben Sie eine E-Mail-Adresse an über die wir uns zurückmelden werden.</td><td></td></tr>
            <tr><td height={30}></td><td></td></tr>
           <tr><td colSpan={2}>
            <Input 
            isRequired type="username" 
            id="username"
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            label="Username" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
           
           <tr><td colSpan={2}> 
            <Input 
            isRequired type="email" 
            id="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            label="E-Mail" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
            
            <tr><td colSpan={2}>
             <RadioGroup label="Wählen Sie ein Thema aus." color="warning" defaultValue="GPE">
              <Radio name="subject" value="GPE" onChange={(e) =>setSubject(e.target.value)}>GPE</Radio>
              <Radio name="subject" value="Designer" onChange={(e) =>setSubject(e.target.value)}>Designer</Radio>
              <Radio name="subject" value="CyDesigner" onChange={(e) =>setSubject(e.target.value)}>CyDesigner</Radio>
              <Radio name="subject" value="Nesting" onChange={(e) =>setSubject(e.target.value)}>NestingSoftware</Radio>
              <Radio name="subject" value="Sonstiges" onChange={(e) =>setSubject(e.target.value)}>Sonstiges</Radio>
             </RadioGroup></td><td></td></tr>
             
             <tr><td height={30}></td><td></td></tr>
            
            <tr><td colSpan={2}><Textarea style={{width:"400px"}}
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
        
          
       
        </div>
      
        </div>
  );
}

export default KontaktPage;
