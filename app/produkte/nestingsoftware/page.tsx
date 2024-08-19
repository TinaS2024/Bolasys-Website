
import Header from "@/components/header";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";
import NestingCard from "@/components/nesting_card";
import bild1 from "@/app/bilder/clipping.svg";
import bild2 from "@/app/bilder/Schrumpfen_nest.svg";
import bild3 from "@/app/bilder/Schrumpfen_gpe.svg";
import bild4 from "@/app/bilder/grosse_formen.svg";
import bild5 from "@/app/bilder/gleiche_formen.svg";


export default function Nesting() {

  const text1 = "Wir bieten Software an um Designs für Stempel auf einem Trommelgravier platzsparend anzuordnen."
  const text2 = "Das Einzeldesign wird am Rand beschnitten."
  const text3 = "Die Auswahl des Einzeldesigns wird abgerundet verkleinert."
  const text4 = "Die Auswahl des Einzeldesigns wird eckig verkleinert.Außerdem sucht das GPE nach ähnlichen Formen und legt sie zusammen."
  const text5 =" Die Nestingsoftware legt zuerst große Formen zusammen und füllt Lücken mit kleineren Elementen aus."
  const text6 = "Das GPE sucht nach ähnlichen Formen und legt sie zusammen."
    
  return (
   
      <>
      <div style={{marginLeft:"100%"}}>
      <Header opacity="50%" titel="Nesting-Software"></Header>  
      </div>
      <div style={{marginTop: "-30%",width:"500px"}}>
            <div><h3 style={{fontSize:"26pt"}} className="text-[#5ec4d2]">Material-Einsparung durch Nesting mit Bolanest oder GPE</h3></div>
            <div><p style={{fontSize: "16pt"}} className="text-white">{text1}</p></div>

      <NestingCard className="m-20 items-center" titel="Schritt 1:Clipping" path={bild1} beschreibung={text2}/>
        

    <div className="flex flex-row abstand_unten_klein">
      <NestingCard className="mr-5 min-w-[250px] items-center" titel="Schritt 2 A: Schrumpfen durch Bolanest" path={bild2} beschreibung={text3} />
      <NestingCard className="mr-5 min-w-[250px] items-center" titel="Schritt 2 B: Schrumpfen durch GPE" path={bild3} beschreibung={text4} />
    </div>

    <div className="flex flex-row abstand_unten_klein">
      <NestingCard className="mr-5 min-w-[250px] items-center" titel="Schritt 3 A: Anordnung durch Bolanest" path={bild4} beschreibung={text5} />
      <NestingCard className="mr-5 min-w-[250px] items-center" titel="Schritt 3 B: Anordnung durch GPE" path={bild5} beschreibung={text6} />
    </div>
    
    </div>
  </>
  
    );
  }
  