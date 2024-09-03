"use client"

import Header from "@/components/header";
import { RadioGroup,Radio, Textarea, Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import swal from "sweetalert"; //Altert-Fenster

/*import { sendEmail } from "@/actions";*/
import { FormEvent } from "react";
import {useState} from "react";

/*https://www.youtube.com/watch?v=Te4ESNxq_xU 14:41  */


const KontaktPage = () =>{

  const onSubmit = async (e: FormEvent)=>
  {
    e.preventDefault()
    /*console.log("Data",username,email,subject,nachricht)*/
    try
    {
      const res = await fetch("api/kontakt",{
        body: JSON.stringify({
          username,email,subject,nachricht

        }),
        headers: {
          "content-type": "application/json",
        }
      })
    } catch (error:any)
    {
      console.error("Fehler", error)
    }
  }

  const bereiche = [
    {key: "maschine",label: "Maschine"},
    {key: "software",label: "Software"},
  ];

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Kontakt" opacity="100%"/>
        <div style={{marginLeft:"-100%"}} className="py-8">
       
        
          <form onSubmit={onSubmit}>
  
        <table className="tab">
          <tbody>
           <tr><td colSpan={2}>
            <Input 
            isRequired type="username" 
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            label="Username" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
           
           <tr><td colSpan={2}> 
            <Input 
            isRequired type="email" 
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="E-Mail" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
            
            <tr><td colSpan={2}>
             <RadioGroup label="Wählen Sie ein Thema aus." color="warning" defaultValue="GPE">
              <Radio value="GPE" onChange={e => setSubject(e.target.value)}>GPE</Radio>
              <Radio value="designer" onChange={e => setSubject(e.target.value)}>Designer</Radio>
              <Radio value="Cydesigner" onChange={e => setSubject(e.target.value)}>CyDesigner</Radio>
              <Radio value="Nesting" onChange={e => setSubject(e.target.value)}>NestingSoftware</Radio>
              <Radio value="Sonstiges" onChange={e => setSubject(e.target.value)}>Sonstiges</Radio>
             </RadioGroup></td><td></td></tr>
             
             <tr><td height={30}></td><td></td></tr>
            
            <tr><td colSpan={2}><Textarea style={{width:"400px"}}
              id="nachricht"
              value={nachricht}
              onChange={e => setNachricht(e.target.value)}
              placeholder="Fragen Sie uns etwas !"
              className="max-w-xs"
              variant="faded"
              minRows={5}
              /></td><td></td></tr>
              
              <tr><td height={30}></td><td></td></tr>
        
        <tr><td></td><td><Button type="submit" className="bg-[#0e2d38] text-white mt-2">Absenden</Button></td></tr>
        </tbody>
        </table>    
        </form>
        
          
       
        </div>
      
        </div>
  );
}

export default KontaktPage;
