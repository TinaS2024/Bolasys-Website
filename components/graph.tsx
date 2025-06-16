import gpe from "@/app/bilder/Bediensoftware_GPE.png";
import phone from "@/app/bilder/Telephon_green.png";
import webstore from "@/app/bilder/Webstore_green.png";
import shop from "@/app/bilder/Shop_green.png";
import maschine from "@/app/bilder/Graviermaschine_darkblue.png";
import email from "@/app/bilder/E-mail_green.png";
import computer from "@/app/bilder/Computer_extern.png";
import montage from "@/app/bilder/Tools_darkblue.png";
import transporter from "@/app/bilder/Car_Transport.png";
import designer from "@/app/bilder/designer_icon.png";
import auftrag from "@/app/bilder/Auftragsverwaltung.png";
import nesting from"@/app/bilder/nesting_darkblue.png";
import lager from "@/app/bilder/Lagermanagement_darkblue.png";

import pfeil from "@/app/bilder/big_arrow.png";

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

    const text1 = ["Verwaltung von Workflows und Microservices."] 
    const text2 = ["Unmittelbar im GPE, z.B. bei telefonischem Kontakt."]
    const text3 = ["Automatische Auftragsgenerierung und Übernahme von Designs im GPE."]
    const text4 = ['Kiosk-System mit direktem Anschluss an das GPE ("GPE-Frontend").']
    const text5 = ["Angebote, Auftragsannahme, Proof-Mails."]
    const text6 = ["Anschluss von lokaler und cloudgestüzter Software für Buchhaltung, Design, Kunden-& Lagerverwaltung."]
    const text7 = ["Interface für Lasergravierer und andere Ausgabegeräte."]
    const text8 = ["Software zur Hilfe bei der Zuordnung von Produktkomponenten und Aufträgen."]
    const text9 = ["Komissionierungs-und Versandmodul."]
    const text10 = ["Verwendung des Bolasys-Designer oder Anbindung von Design-Fremdsoftware an das GPE."]
    const text11 = ["Anlegen und Editieren von Aufträgen und Workflow-Verwaltung."]
    const text12 = ["Nestingsoftware für die bezüglich Material-und Zeitersparnis optimierte Anordnung von Designs."]
    const text13 = ["Komissionierungsmanagement mit Komponentenlisten und Produktionseinheiten für Wegoptimierung."]


  return (
 
    <div className="graph-position" style={{marginTop:"200px"}}> 
    <div className="pfeil_gpe" style={{backgroundImage: `url(${pfeil.src})`}}></div>
    
    {/* GPE-Basis */}
    <div className="img1">
      <DesignerTooltip top="15%" left="15%" titel="GPE-Basis" beschreibung={text1} bildpfad={leerbild}/>
      <OwnModal className="modal_klein_img1" links="0px" oben="100px" link="gpe" titel="GPE-Basis" inhalt={text1}/>
      <Image src={bild0} alt="gpe" width={100} height={100}></Image>
    </div>

    {/* Telefon */}
    <div className="img2">
      <DesignerTooltip top="20%" left="5%" titel="Auftragsvorbereitung und Annahme über Telefon:" beschreibung={text2} bildpfad={leerbild}/>
      <OwnModal className="modal_klein_img2" links="-8px" oben="80px" link="auftragsannahme" titel="Telefon" inhalt={text2}/>
      <Image src={bild1} alt="telefon" width={80} height={80}></Image>
    </div>

    {/* Webstore*/}
      <div className="img3">
        <DesignerTooltip top="10%" left="15%" titel="Auftragsvorbereitung und Annahme über Webstore:" beschreibung={text3} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img3" links="-5px" oben="60px" link="auftragsannahme" titel="Webstore" inhalt={text3}/>
        <Image src={bild2} alt="webstore" width={80} height={80}></Image>
      </div>

      {/* Shop */}
      <div className="img4">
        <DesignerTooltip top="25%" left="25%" titel="Auftragsvorbereitung und Annahme über Shop:" beschreibung={text4} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img4" links="10px" oben="80px" link="auftragsannahme" titel="Shop" inhalt={text4}/>
        <Image src={bild3} alt="shop" width={100} height={100}></Image>
      </div>

      {/* E-Mail */}
      <div className="img5">
        <DesignerTooltip top="5%" left="0%" titel="Auftragsvorbereitung und Annahme über E-Mail:" beschreibung={text5} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img5" links="-10px" oben="50px" link="auftagsannahme" titel="E-Mail" inhalt={text5}/>
        <Image src={bild4} alt="email" width={60} height={60}></Image>
      </div>

      {/* Software */}
      <div className="img6">
        <DesignerTooltip top="1%" left="10%" titel="Externe Software" beschreibung={text6} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img6" links="-10px" oben="55px" link="software" titel="Externe Sofware" inhalt={text6}/>
        <Image src={bild5} alt="computer" width={100} height={100}></Image>
      </div>
      
      {/* Graviermaschine */}
      <div className="img7">
        <DesignerTooltip top="5%" left="5%" titel="Graviermaschine" beschreibung={text7} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img7" links="-30px" oben="60px" link="gravier" titel="Graviermaschine" inhalt={text7}/>
        <Image src={bild6} alt="graviermaschine" width={70} height={70}></Image>
      </div>

      {/* Montage */}
      <div className="img8">
        <DesignerTooltip top="10%" left="10%" titel="Montage" beschreibung={text8} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img8" links="-5px" oben="70px" link="montage" titel="Montage" inhalt={text8}/>
        <Image src={bild7} alt="montage" width={80} height={80}></Image>
      </div>

      {/* Transport*/}
      <div className="img9">
        <DesignerTooltip top="1%" left="10%" titel="Transport" beschreibung={text9} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img9" links="-10px" oben="50px" link="transport" titel="Transport" inhalt={text9}/>
        <Image src={bild8} alt="transport" width={80} height={80}></Image>
      </div>
      
      {/* Designer */}
      <div className="img10">
        <DesignerTooltip top="5%" left="20%" titel="Designer" beschreibung={text10} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img10" links="5px" oben="80px" link="design" titel="Designer" inhalt={text10}/>
        <Image src={bild9} alt="designer" width={100} height={100}></Image>
      </div>

      {/* Auftragsverwaltung */}
      <div className="img11">
        <DesignerTooltip top="5%" left="-5%" titel="Auftragsverwaltung" beschreibung={text11} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img11" links="-50px" oben="65px" link="auftragsverwaltung" titel="Auftragsverwaltung" inhalt={text11}/>
        <Image src={bild10} alt="auftragsverwaltung" width={50} height={50}></Image>
      </div>
      
      {/* Nesting */}
      <div className="img12">
        <DesignerTooltip top="1%" left="0%" titel="Nesting" beschreibung={text12} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img12" links="-10px" oben="50px" link="nest" titel="Nesting" inhalt={text12}/>
        <Image src={bild11} alt="nesting" width={60} height={60}></Image>
      </div>


      {/* Lager */}
      <div className="img13">
        <DesignerTooltip top="10%" left="5%" titel="Lager" beschreibung={text13} bildpfad={leerbild}/>
        <OwnModal className="modal_klein_img13" links="-5px" oben="60px" link="lager" titel="Lager" inhalt={text12}/>
        <Image src={bild12} alt="lager" width={70} height={70}></Image>
      </div>
    
    </div>   


  );

      
};
