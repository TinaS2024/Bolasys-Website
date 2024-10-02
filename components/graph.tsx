import gpe from "@/app/bilder/Bediensoftware_GPE.png";
import phone from "@/app/bilder/Telephon.png";
import webstore from "@/app/bilder/Webstore.png";
import shop from "@/app/bilder/Shop.png";
import maschine from "@/app/bilder/Graviermaschine.png";
import email from "@/app/bilder/E-mail.png";
import computer from "@/app/bilder/Computer_extern.png";
import montage from "@/app/bilder/Tools.png";
import transporter from "@/app/bilder/Car_Transport.png";
import designer from "@/app/bilder/designer_icon.png";
import auftrag from "@/app/bilder/Auftragsverwaltung.png";
import nesting from"@/app/bilder/nesting_icon.png";
import lager from "@/app/bilder/Lagermanagement.png";

import OwnModal from "@/components/ownmodal";
import Image from "next/image";
import DesignerTooltip from "@/components/designer_tooltip";
import leerbild from "@/app/bilder/leerbild.png";

export const Graph = () => {

    const bild0 = gpe;
    const bild1 = phone;
    const bild2 = webstore;
    const bild3 = shop;
    const bild4 = email;
    const bild5 = computer;
    const bild6 = maschine;
    const bild7 = montage;
    const bild8 = transporter;
    const bild9 = designer;
    const bild10 = auftrag;
    const bild11 = nesting;
    const bild12 = lager;

    const text1 = ["Microservice, Workflowmanagment und Broker-Software."] //BPMN; RabbitMQ
    const text2 = ["Auftragsannahme über Telefon oer Handy."]
    const text3 = ["Auftragsannahme über einen Webstore."]
    const text4 = ["Auftragsannahme über einen Shop."]
    const text5 = ["Auftragsannahme über E-Mail."]
    const text6 = ["Externe Software die angeschlossen werden kann."]
    const text7 = ["Graviermaschine die an Software angeschlossen ist."]
    const text8 = ["Montage und Zuordnung des Produktes."]
    const text9 = ["Verpackung und Versand."]
    const text10 = ["WebApp-Designer."]
    const text11 = ["Auftragsverwaltung."]
    const text12 = ["Nesting von Layouts."]
    const text13 = ["Lagerkommissionierung"]


  return (
 
    <div className="graph-position" style={{marginTop:"300px"}}> 
    

    <div className="img1">
      <DesignerTooltip top="15%" left="15%" titel="Microservice" beschreibung={text1} bildpfad={leerbild}/>
      <OwnModal links="10px" oben="15px" link="service" titel="Microservice" inhalt={text1}/>
      <Image src={bild0} alt="microservice" width={100} height={100}></Image>
    </div>
    
    <div className="img2">
      <DesignerTooltip top="20%" left="5%" titel="Telefon" beschreibung={text2} bildpfad={leerbild}/>
      <OwnModal links="" oben="20px" link="auftragsannahme" titel="Telefon" inhalt={text2}/>
      <Image src={bild1} alt="telefon" width={80} height={80}></Image>
    </div>

      <div className="img3">
        <DesignerTooltip top="10%" left="15%" titel="Webstore" beschreibung={text3} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="auftragsannahme" titel="Webstore" inhalt={text3}/>
        <Image src={bild2} alt="webstore" width={80} height={80}></Image>
      </div>

      <div className="img4"
      ><DesignerTooltip top="25%" left="25%" titel="Shop" beschreibung={text4} bildpfad={leerbild}/>
      <OwnModal links="" oben="20px" link="auftragsannahme" titel="Shop" inhalt={text4}/>
      <Image src={bild3} alt="shop" width={100} height={100}></Image>
      </div>

      <div className="img5">
        <DesignerTooltip top="5%" left="0%" titel="E-Mail" beschreibung={text5} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="auftagsannahme" titel="E-Mail" inhalt={text5}/>
        <Image src={bild4} alt="email" width={60} height={60}></Image>
      </div>

      <div className="img6">
        <DesignerTooltip top="1%" left="10%" titel="Externe Software" beschreibung={text6} bildpfad={leerbild}/>
        <OwnModal links="10px" oben="" link="software" titel="Externe Sofware" inhalt={text6}/>
        <Image src={bild5} alt="computer" width={100} height={100}></Image>
      </div>
      
      <div className="img7">
        <DesignerTooltip top="5%" left="5%" titel="Graviermaschine" beschreibung={text7} bildpfad={leerbild}/>
        <OwnModal links="" oben="10px" link="gravier" titel="Graviermaschine" inhalt={text7}/>
        <Image src={bild6} alt="graviermaschine" width={80} height={80}></Image>
      </div>

      <div className="img8">
        <DesignerTooltip top="10%" left="10%" titel="Montage" beschreibung={text8} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="montage" titel="Montage" inhalt={text8}/>
        <Image src={bild7} alt="montage" width={80} height={80}></Image>
      </div>

      <div className="img9">
        <DesignerTooltip top="1%" left="10%" titel="Transporter" beschreibung={text9} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="transport" titel="Transporter" inhalt={text9}/>
        <Image src={bild8} alt="transporter" width={80} height={80}></Image>
      </div>
      
      <div className="img10">
        <DesignerTooltip top="5%" left="20%" titel="Designer" beschreibung={text10} bildpfad={leerbild}/>
        <OwnModal links="10px" oben="" link="design" titel="Designer" inhalt={text10}/>
        <Image src={bild9} alt="designer" width={100} height={100}></Image>
      </div>

      <div className="img11">
        <DesignerTooltip top="5%" left="-5%" titel="Auftragsverwaltung" beschreibung={text11} bildpfad={leerbild}/>
        <OwnModal links="-20px" oben="" link="auftragsverwaltung" titel="Auftragsverwaltung" inhalt={text11}/>
        <Image src={bild10} alt="auftragsverwaltung" width={50} height={50}></Image>
      </div>
      
      <div className="img12">
        <DesignerTooltip top="1%" left="0%" titel="Nesting" beschreibung={text12} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="nest" titel="Nesting" inhalt={text12}/>
        <Image src={bild11} alt="nesting" width={60} height={60}></Image>
      </div>
      
      <div className="img13">
        <DesignerTooltip top="10%" left="5%" titel="Lager" beschreibung={text13} bildpfad={leerbild}/>
        <OwnModal links="" oben="" link="lager" titel="Lager" inhalt={text12}/>
        <Image src={bild12} alt="lager" width={70} height={70}></Image>
      </div>
    
    </div>   


  );

      
};
