
"use client"
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Tab} from "@nextui-org/react";
import TabZeile from "@/components/tabzeile";


export default function ImpressumPage() {
  return (  

    <Card className="max-w-[500px]"> 
      <CardHeader className="bg-[#2695a0] text-center justify-center">
       
     <h1  style={{fontSize:"26pt"}} className={title()}>Impressum</h1>
      </CardHeader>
      <CardBody> 
      
        <table> 
          <tbody>
          <TabZeile titel="Firma" inhalt="Bolasys GmbH"></TabZeile>
          <TabZeile titel="Straße" inhalt="Fritz-Wagner-Siedlung 16 "></TabZeile>
          <TabZeile titel="Ort" inhalt="09116 Chemnitz"></TabZeile>
          <TabZeile titel="Telefon" inhalt="(01 71) 8 50 09 08"></TabZeile>
          <TabZeile titel="GF Rainer Boes" inhalt="(03 71) 3 35 06 67"></TabZeile>
          <TabZeile titel=" E-Mail" inhalt="info@bolasys.de"></TabZeile>
        </tbody> 
        </table>  
       
   
      </CardBody>
            
    </Card>

  );
}
