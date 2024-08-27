import gpe from "../app/bilder/Bediensoftware_GPE.png";
import phone from "../app/bilder/Telephon.png";
import webstore from "../app/bilder/Webstore.png";
import shop from "../app/bilder/Shop.png";
import maschine from "../app/bilder/Graviermaschine.png";
import email from "../app/bilder/E-mail.png";
import computer from "../app/bilder/Computer_extern.png";

import montage from "../app/bilder/Tools.png";
import versand from "../app/bilder/Versandpapiere.png";
import verpackung from "../app/bilder/Gift.png";
import transport from "../app/bilder/Car_Transport.png";

import OwnModal from "@/components/ownmodal";
import Image from "next/image";


export const Graph = () => {

    const bild0 = gpe;
    const bild1 = phone;
    const bild2 = webstore;
    const bild3 = shop;
    const bild4 = email;
    const bild5 = computer;
    const bild6 = maschine;

    const bild7 = montage;
    const bild8 = versand;
    const bild9 = verpackung;
    const bild10 = transport;

    const text1 = "Das Herz der Bolays Bedien-Software."
    const text2 = "Bestellungen und Design mit der Software."
    const text3 = "Direkte Bestellungen über die Software."
    const text4 = "Anbindung an Kiosksysteme im Laden." 
    const text5 = "Kundenanfragen und Abfragen an die Software."
    const text6 = "Anbindung an externer Software: Buchhaltung & Designprogramme." 
    const text7 = "Direktverbindung zwischen Software und Maschine."

    const text8 = "Montage der Maschinen.";
    const text9 = "Erstellen von Versandpapieren.";
    const text10 = "Verpackung von Produkten";
    const text11 = "Transport der Produkte";


  return (
 
    <div className="pt-20"> 
     

    <div className="img1"><OwnModal className="img1" titel="GPE" inhalt={text1}/><Image src={bild0} alt="gpe" width={100} height={100}></Image></div>
    
    <div className="img2"><OwnModal className="img2" titel="Telefon" inhalt={text2}/><Image src={bild1} alt="telefon" width={100} height={100}></Image></div>

      <div className="img3"><OwnModal className="img3" titel="Webstore" inhalt={text3}/><Image src={bild2} alt="webstore" width={100} height={100}></Image></div>

      <div className="img4"><OwnModal className="img4" titel="Shop" inhalt={text4}/><Image src={bild3} alt="shop" width={100} height={100}></Image></div>

      <div className="img5"><OwnModal className="img5" titel="E-Mail" inhalt={text5}/><Image src={bild4} alt="email" width={100} height={100}></Image></div>

      <div className="img6"><OwnModal className="img6" titel="Externer Computer" inhalt={text6}/><Image src={bild5} alt="computer" width={100} height={100}></Image></div>
      
      <div className="img7"><OwnModal className="img7" titel="Graviermaschine" inhalt={text7}/><Image src={bild6} alt="graviermaschine" width={100} height={100}></Image></div>

      <div className="img8"><OwnModal className="img8" titel="Montage" inhalt={text8}/><Image src={bild7} alt="montage" width={100} height={100}></Image></div>

      

{/*}
      <div className="img7 img_unten">

      <div className="img8_1"><NetworkTooltip titel="Montage" beschreibung={text8} bildpfad={bild7}></NetworkTooltip></div>

      <div className="img8_2"><NetworkTooltip titel="Versand" beschreibung={text9} bildpfad={bild8}></NetworkTooltip></div>

      <div className="img8_3"><NetworkTooltip titel="Verpackung" beschreibung={text10} bildpfad={bild9}></NetworkTooltip></div>

      <div className="img8_4"><NetworkTooltip titel="Transport" beschreibung={text11} bildpfad={bild10}></NetworkTooltip></div>
   
    </div>*/}
    
    </div>   


  );

      
};
