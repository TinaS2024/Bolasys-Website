"use client"

import Header from "@/components/header";
import { RadioGroup,Radio, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

/* E-Mail senden: https://dev.to/shahmir049/how-to-send-emails-using-nextjs-14-resend-and-react-email-2b7g */
/* https://dev.to/onlyoneerin/how-to-create-and-send-custom-emails-using-react-email-and-resend-api-4fc0 */
 
const KontaktPage = () =>{

  const router = useRouter();
  const bereiche = [
    {key: "maschine",label: "Maschine"},
    {key: "software",label: "Software"},
  ];

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Kontakt" opacity="100%"/>
        <div style={{marginLeft:"-100%",width:"400px"}} className="container h-full w-full flex flex-col py-8">
        <form>
        <table className="tab">
          <tbody>
            <tr><td colSpan={2}>
             <RadioGroup label="Wählen Sie ihren Bereich aus." color="warning" defaultValue="GPE">
             <Radio value="gpe">GPE</Radio>
              <Radio value="designer">Designer</Radio>
              <Radio value="cydesigner">CyDesigner</Radio>
              <Radio value="nesting">NestingSoftware</Radio>
              <Radio value="sonstiges">Sonstiges</Radio>
             </RadioGroup>
             <tr><td height={30}></td><td></td></tr>
              </td><td></td></tr>
            <tr><td colSpan={2}><Textarea
            value=""
              label=""
              placeholder="Fragen Sie uns etwas !"
              className="max-w-xs"
              labelPlacement="outside"
              variant="faded"
              /></td><td></td></tr>
              <tr><td height={30}></td><td></td></tr>
        <tr><td></td><td><Button type="submit" className="bg-[#5ec4d2] text-black mt-2">Absenden</Button></td></tr>
        </tbody>
        </table>
          
        </form>
        </div>
      
        </div>
  );
}

export default KontaktPage;
