
"use client"
import { title } from "@/components/primitives";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import { Card, CardHeader, CardBody} from "@nextui-org/react";
import TabZeile from "@/components/tabzeile";
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";


export default function ImpressumPage() {

  const text = [""]

  return (  
<>
<div style={{marginLeft:"50%"}}>
      <HeaderNeu></HeaderNeu>  
      <Background left="-200px" opacity="10%"></Background>
      </div>
<div>
 <Titel_Subtitel_nolink titel="Impressum" subtitel={text}/>  
  </div>
    <Card className="max-w-[500px]"> 
      <CardHeader className="bg-[#2695a0]/30 text-center justify-center">
       
     <h1  style={{fontSize:"20pt"}} className={title()}>Bolasys GmbH</h1>
      </CardHeader>
      <CardBody> 
      
        <table> 
          <tbody>
          <TabZeile titel="Firmenadresse:" inhalt="Fritz-Wagner-Siedlung 16"></TabZeile>
          <TabZeile titel="" inhalt="09116 Chemnitz"></TabZeile>
          <tr><td style={{height:"25px"}}></td></tr>
          <TabZeile titel="Büro-Telefon:" inhalt="(03 71) 3 35 06 67"></TabZeile>
          <TabZeile titel="GF Beate Lang:" inhalt="(01 70) 8 17 89 66"></TabZeile>
          <TabZeile titel="GF Rainer Boes:" inhalt="(01 71) 8 50 09 08"></TabZeile>
          <TabZeile titel=" E-Mail:" inhalt="info@bolasys.de"></TabZeile>
        </tbody> 
        </table>  
       
   
      </CardBody>
            
    </Card>
    </>

  );
}
