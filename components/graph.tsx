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

import NetworkTooltip from "./network_tooltip";
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
 
    <div className="pt-5 abstand_unten"> 
     

    <div className="img1"><OwnModal className="img1" titel="GPE" inhalt={text1}></OwnModal><Image src={bild0} alt="gpe" width={100} height={100}></Image></div>
    
    <div className="img2"><NetworkTooltip titel="Telefon" beschreibung={text2} bildpfad={bild1}></NetworkTooltip></div>

      <div className="img3"><NetworkTooltip titel="Webstore" beschreibung={text3} bildpfad={bild2}></NetworkTooltip></div>

      <div className="img4"><NetworkTooltip titel="Shop" beschreibung={text4} bildpfad={bild3}></NetworkTooltip></div>

      <div className="img5"><NetworkTooltip titel="E-Mail" beschreibung={text5} bildpfad={bild4}></NetworkTooltip></div>

      <div className="img6"><NetworkTooltip titel="Externer Computer" beschreibung={text6} bildpfad={bild5}></NetworkTooltip></div>
      
      <div className="img7"><NetworkTooltip titel="Graviermaschine" beschreibung={text7} bildpfad={bild6}></NetworkTooltip></div>

      <div className="img8"><NetworkTooltip titel="Montage" beschreibung={text8} bildpfad={bild7}></NetworkTooltip></div>

      

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
