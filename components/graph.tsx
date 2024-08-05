import gpe from "../app/bilder/Bediensoftware_GPE.png";
import phone from "../app/bilder/Telephon.png";
import webstore from "../app/bilder/Webstore.png"
import shop from "../app/bilder/Shop.png";
import maschine from "../app/bilder/Graviermaschine.png"
import email from "../app/bilder/E-mail.png";
import computer from "../app/bilder/Computer_extern.png"

import NetworkTooltip from "./network_tooltip";


export const Graph = () => {

    const bild0 = gpe;
    const bild1 = phone;
    const bild2 = webstore;
    const bild3 = shop;
    const bild4 = email;
    const bild5 = computer;
    const bild6 = maschine;

    const text1 = "Das Herz der Bolays Bedien-Software."
    const text2 = "Bestellungen und Design mit der Software."
    const text3 = "Direkte Bestellungen über die Software."
    const text4 = "Anbindung an Kiosksysteme im Laden." 
    const text5 = "Kundenanfragen und Abfragen an die Software."
    const text6 = "Anbindung an externer Software." 
    const text7 = "Direktverbindung zwischen Software und Maschine."

  return (

    <div className="pt-5 abstand_unten"> 

    <div className="img1"><NetworkTooltip titel="GPE" beschreibung={text1} bildpfad={bild0}></NetworkTooltip></div>
    
    <div className="img2"><NetworkTooltip titel="Telefon" beschreibung={text2} bildpfad={bild1}></NetworkTooltip></div>

      <div className="img3"><NetworkTooltip titel="Webstore" beschreibung={text3} bildpfad={bild2}></NetworkTooltip></div>

      <div className="img4"><NetworkTooltip titel="Shop" beschreibung={text4} bildpfad={bild3}></NetworkTooltip></div>

      <div className="img5"><NetworkTooltip titel="E-Mail" beschreibung={text5} bildpfad={bild4}></NetworkTooltip></div>

      <div className="img6"><NetworkTooltip titel="Externer Computer" beschreibung={text6} bildpfad={bild5}></NetworkTooltip></div>
      
      <div className="img7"><NetworkTooltip titel="Graviermaschine" beschreibung={text7} bildpfad={bild6}></NetworkTooltip></div>
   
    </div>

  );

      
};
