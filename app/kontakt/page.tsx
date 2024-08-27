"use client"

import Header from "@/components/header";
import { RadioGroup,Radio, Textarea, Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import swal from "sweetalert";

import { sendEmail } from "@/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";


/* E-Mail senden: https://dev.to/shahmir049/how-to-send-emails-using-nextjs-14-resend-and-react-email-2b7g */
/* https://dev.to/onlyoneerin/how-to-create-and-send-custom-emails-using-react-email-and-resend-api-4fc0 */
 
/* Api Key: re_b4SRtHMr_DQsHbNDt7ctJ7KoesXYGe7VG */
const KontaktPage = () =>{

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error:null,
    success:false
  })

  useEffect(() => {
    if (sendEmailState.success)
    {
      swal({title:"Erfolg!",text:"E-Mail wurde gesendet!",icon:"success"})
    }
    if (sendEmailState.error)
    {
      swal({title:"Fehler!",text:"E-Mail konte nicht gesendet werden!",icon:"warning",dangerMode:true})
    }
  }, [sendEmailState])

  const bereiche = [
    {key: "maschine",label: "Maschine"},
    {key: "software",label: "Software"},
  ];

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Kontakt" opacity="100%"/>
        <div style={{marginLeft:"-100%"}} className="py-8">
       
        
          <form action={sendEmailAction}>
        <table className="tab">
          <tbody>
           <tr><td colSpan={2}>
            <Input 
            isRequired type="username" 
            name="username"
            label="Username" 
            defaultValue="" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
           
           <tr><td colSpan={2}> 
            <Input 
            isRequired type="email" 
            name="email"
            label="E-Mail" 
            defaultValue="" 
            className="max-w-xs" 
            variant="bordered"/></td><td></td></tr>
            
            <tr><td colSpan={2}>
             <RadioGroup label="Wählen Sie ein Thema aus." color="warning" defaultValue="gpe">
             <Radio value="gpe" name="thema">GPE</Radio>
              <Radio value="designer" name="thema">Designer</Radio>
              <Radio value="cydesigner" name="thema">CyDesigner</Radio>
              <Radio value="nesting" name="thema">NestingSoftware</Radio>
              <Radio value="sonstiges" name="thema">Sonstiges</Radio>
             </RadioGroup></td><td></td></tr>
             
             <tr><td height={30}></td><td></td></tr>
            
            <tr><td colSpan={2}><Textarea style={{width:"400px"}}
              name="nachricht"
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
