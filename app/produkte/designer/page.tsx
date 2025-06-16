"use client"
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import OwnModal_nolink from "@/components/ownmodal_nolink";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import DesignerTooltip from "@/components/designer_tooltip";
import pfeil_r from "@/app/bilder/pfeil_rechts.png";
import pfeil_l from "@/app/bilder/pfeil_links.png";

import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import bild1 from "@/app/bilder/satz1.png";
import bild2 from "@/app/bilder/satz2.png";
import bild3 from "@/app/bilder/satz3.png";

//Slider: https://medium.com/@dissanayakewishwajith/creating-an-image-slider-with-next-js-tailwind-css-and-typescript-4dbeeb9c0df6#:~:text=In%20this%20tutorial,%20I%E2%80%99ll%20show%20you


interface ImageData
{
    src: StaticImageData;
}

const bilder: ImageData[] =
    [
      {
        src: bild1,               
      },
      {
        src: bild2,               
      },
      {
        src: bild3,            
      },  
    ];
      
export default function Designer() 
{
  const {isOpen,onOpen,onOpenChange} = useDisclosure();
  const [currendIndex,setCurrentIndex] = useState<number>(0);
  const [isHovered] = useState<boolean>(false);


  const nextSlide = ():void =>
    {
      setCurrentIndex(
        (prevIndex) => (prevIndex +1) % bilder.length);
    };

    useEffect(() =>
    {
      if(!isHovered)
      {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);

        return () =>
        {
          clearInterval(interval);
        };
      }
    
    }, [isHovered]);
  

  const bild_rechts = pfeil_r;
  const bild_links = pfeil_l;
  const text0 = ["Webanwendung zum designen von Schilder & Stempel."]

    const text1 = ["Warenkorb mit Bezeichnung des Designs, sowie der Spracheinstellung und des Abmeldebutton."]
    const text2 = ["Zeichen-Elemente zum Erstellen des Designs:",<br/>,"1. Normaler Text",<br/>, "2. Schräger Text",<br/>,"3. Rechteck",<br/>,"4. Kreis",<br/>,"5. Ellipse",<br/>,"6. Linie",<br/>,"7. Upload für eigene Bilder."]
    const text3 = ["Detailierte Einstellungen für die Zeichenelemente, inklusive erweiterte Einstellungen"]
    const text4 = ["Canvas-Anzeige des erstellten Produkts."]
    const text5 = ["Produktbeschreibung mit Maßen und Preis."]
    const text6 = ["Minimierte Produktvorschau."]

      
    return (
   
      <>
     
      <HeaderNeu></HeaderNeu>  
      <Background left="-246px" opacity="10%"></Background>
       
    <Titel_Subtitel_nolink titel="Designer" subtitel={text0}/>  
          <div id="designerbild" className="flex relative">
            <div><DesignerTooltip top="-1%" left="30%" titel="Header" beschreibung={text1} bildpfad={bild_rechts}/><OwnModal_nolink id="pfeil1" className="pfeil1" titel="Header" inhalt={text1}/></div>
            <div><DesignerTooltip top="10%" left="5%" titel="Zeichenelemente" beschreibung={text2} bildpfad={bild_links}/><OwnModal_nolink id="pfeil2" className="pfeil2" titel="Zeichenelemente" inhalt={text2}/></div>
            <div><DesignerTooltip top="30%" left="53%" titel="Attribute" beschreibung={text3} bildpfad={bild_rechts}/><OwnModal_nolink id="pfeil3" className="pfeil3" titel="Attribute" inhalt={text3}/></div>
            <div><DesignerTooltip top="10%" left="30%" titel="Canvas" beschreibung={text4} bildpfad={bild_links}/><OwnModal_nolink id="pfeil4" className="pfeil4" titel="Canvas" inhalt={text4}/></div>
            <div><DesignerTooltip top="17%" left="53%" titel="Produktdetails" beschreibung={text5} bildpfad={bild_rechts}/><OwnModal_nolink id="pfeil5" className="pfeil5" titel="Produktdetails" inhalt={text5}/></div>
            <div><DesignerTooltip top="38%" left="15%" titel="Vorschau" beschreibung={text6} bildpfad={bild_links}/><OwnModal_nolink id="pfeil6" className="pfeil6" titel="Vorschau" inhalt={text6}/></div>
          </div> 
          <Button style={{marginTop:"25px"}} className="bg-[#5ec4d2] text-black" onPress={onOpen} ><p className="text-xl">Design-Beispiele</p></Button>
          <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2]"}}>
            
            <ModalContent style={{marginLeft:"5%",marginTop:"6%"}} className=" sm:max-w-[400px] sm:min-h-[300px]  md:min-w-[800px] md:min-h-[600px]  lg:min-w-[1200px] lg:min-h-[900px]">
                {
                (
                    <>
                    <ModalBody >{bilder.map((_,index)=>
                    (
                      <>
                      <div>
                        <Image src={bilder[currendIndex].src} alt="" layout="fill" objectFit="cover"></Image>
                      </div>
                    <div key={index} className={`${index == currendIndex}transition-all duration-500 ease-in-out`}>

                    </div>
                    </>)
                    )}
                    </ModalBody>
                    </>       
                )

                }
                 
            </ModalContent>  
        </Modal>
          
  </>
  
  
    );
  }
  