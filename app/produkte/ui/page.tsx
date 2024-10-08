"use client"

import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import OwnModal_nolink from "@/components/ownmodal_nolink";
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
     <div style={{marginLeft:"50%"}}>
      <HeaderNeu></HeaderNeu>  
      <Background left="-255px" opacity="20%"></Background>
      </div>
          <Titel_Subtitel_nolink titel="UI" subtitel={text0}/>  
  

          <div style={{position:"relative",marginTop:"25%",marginLeft:"10%"}}><DesignerTooltip top="5%" left="35%" titel="Magento" beschreibung={text1} bildpfad={leerbild}/><OwnModal_nolink className="" links="35%" oben="30%" titel="Magento 2" inhalt={text1}/><Image style={{marginTop:"-80px",marginLeft:"100px"}} src={bild1} alt="magento" width={200} height={200}></Image></div>
          <div style={{position:"relative",marginTop:"45%",marginLeft:"10%"}}><DesignerTooltip top="5%" left="35%" titel="Next JS" beschreibung={text2} bildpfad={leerbild}/><OwnModal_nolink className="" links="35%" oben="30%" titel="Next JS 14" inhalt={text2}/><Image style={{marginTop:"-120px",marginLeft:"100px"}} src={bild2} alt="next-js" width={200} height={200}></Image></div>

    </>
    );
  }
  