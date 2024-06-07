
"use client"
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody} from "@nextui-org/react";
import TabZeile from "@/components/tabzeile";


export default function AboutPage() {
  return (  

    <Card className="max-w-[450px]">
      <CardHeader className="bg-cyan-200 text-center justify-center">
     <h1 className={title({ color: "cyan" })}>Kontakt</h1>
      </CardHeader>
      <CardBody> 
        <table>
          <TabZeile titel="Firma" inhalt="Bolasys GmbH"></TabZeile>
          <TabZeile titel="Adresse" inhalt="Fritz-Wagner-Siedlung 16 09116 Chemnitz"></TabZeile>
          <TabZeile titel="Telefon" inhalt="(01 71) 8 50 09 08"></TabZeile>
          <TabZeile titel="GF Rainer Boes" inhalt="(03 71) 3 35 06 67"></TabZeile>
          <TabZeile titel=" E-Mail" inhalt="info@bolasys.de"></TabZeile>
        </table>
      </CardBody>
        
    </Card>

  );
}
