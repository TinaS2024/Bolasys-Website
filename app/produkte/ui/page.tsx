"use client"

import Header from "@/components/header";  
import OwnModal from "@/components/ownmodal";
import magento_bild from "@/app/bilder/magento.png";
import next_bild from "@/app/bilder/Next.jpg";

import Image from "next/image";

export default function UI() {

  const bild1 = magento_bild;
  const bild2 = next_bild;

  const text1 = "Layout-Design mit Page-Builder und Content-Pflege.";
  const text2 = "Landingpages mit dem neuen React-Java-Script-Framework Next.";
  
    return (
     
      <div style={{marginLeft:"50%"}} >
          <Header opacity="100%" titel="UI-Bedienoberflächen"></Header>

          <div style={{width:"500px",marginLeft:"-100%",marginTop:"-100px"}}>
            <div><h3 style={{fontSize:"16pt"}} className="text-white">Wir können User-Interfaces mit Java-Script-Frameworks erstellen und Sie in CMS-Systeme einbinden.</h3></div>
          </div>
          <div style={{marginLeft:"-80%"}}>
          <div><OwnModal className="py-5" titel="Magento 2" inhalt={text1}/><Image style={{marginTop:"-80px",marginLeft:"100px"}} src={bild1} alt="magento" width={200} height={200}></Image></div>
          <div><OwnModal className="py-10" titel="Next JS 14" inhalt={text2}/><Image style={{marginTop:"-120px",marginLeft:"100px"}} src={bild2} alt="next-js" width={200} height={200}></Image></div>
          </div>
  </div>

    );
  }
  