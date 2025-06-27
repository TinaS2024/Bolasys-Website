"use client"

import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import magento_bild from "@/app/bilder/magento.png";
import next_bild from "@/app/bilder/Next.jpg";

import Image from "next/image";
import DesignerTooltip from "@/components/designer_tooltip";
import leerbild from "@/app/bilder/leerbild.png";


export default function UI() {

  const bild1 = magento_bild;
  const bild2 = next_bild;

  const text0 =["Wir können User-Interfaces mit Java-Script-Frameworks erstellen und Sie in CMS-Systeme einbinden."];
  const text1 = ["Layout-Design mit Page-Builder und Content-Pflege."];
  const text2 = ["Landingpages mit dem neuen React-Java-Script-Framework Next."];
  
    return (
     
          <>
      <HeaderNeu></HeaderNeu>  
      <Background top="-350px" left="0px" opacity="10%"></Background>

          <Titel_Subtitel_nolink titel="UI" subtitel={text0}/>  
  
          <div id="magento" className="relative flex flex-col items-center mb-8"><DesignerTooltip top="4%" left="4%" titel="Magento" beschreibung={text1} bildpfad={leerbild}/><Image src={bild1} alt="magento" width={200} height={200}></Image></div>
          <p>{text1}</p>
          <div id="next" className="relative flex flex-col items-center"><DesignerTooltip top="5%" left="-5%" titel="Next JS" beschreibung={text2} bildpfad={leerbild}/><Image src={bild2} alt="next-js" width={200} height={200}></Image></div>
          <p>{text2}</p>
    </>
    );
  }
  