"use client"

import Header from "@/components/header";
import { RadioGroup,Radio, Textarea, Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import swal from "sweetalert";

/*import { sendEmail } from "@/actions";*/
import { ChangeEvent, FormEvent } from "react";
import {useState} from "react";

/*https://www.youtube.com/watch?v=Te4ESNxq_xU 14:41  
https://www.youtube.com/watch?v=esdFVfFA_nI
*/


const KontaktPage = () =>{

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    nachricht:"",
  });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) =>
  {
    setFormData({...formData,[e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: FormEvent)=>
  {
    e.preventDefault()

    try
    {
      const res = await fetch("api/kontakt",{
        method: "POST", 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({formData}), 
      });
      const data = await res.json();
    } catch (error:any)
    {
      console.error("Fehler", error)
    }
  }

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Kontakt" opacity="100%"/>
        <div style={{marginLeft:"-100%"}} className="py-8">
       
        
          <form onSubmit={handleSubmit}>
  
        <table className="tab">
          <tbody>
           <tr><td colSpan={2}>
            <Input 
            isRequired type="username" 
            id="username"
            value={formData.username}
            onChange={handleChange}
            label="Username" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
           
           <tr><td colSpan={2}> 
            <Input 
            isRequired type="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            label="E-Mail" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
            
            <tr><td colSpan={2}>
             <RadioGroup label="Wählen Sie ein Thema aus." color="warning" defaultValue="GPE">
              <Radio name="subject" value="GPE" onChange={handleChange}>GPE</Radio>
              <Radio name="subject" value="Designer" onChange={handleChange}>Designer</Radio>
              <Radio name="subject" value="CyDesigner" onChange={handleChange}>CyDesigner</Radio>
              <Radio name="subject" value="Nesting" onChange={handleChange}>NestingSoftware</Radio>
              <Radio name="subject" value="Sonstiges" onChange={handleChange}>Sonstiges</Radio>
             </RadioGroup></td><td></td></tr>
             
             <tr><td height={30}></td><td></td></tr>
            
            <tr><td colSpan={2}><Textarea style={{width:"400px"}}
              id="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
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
