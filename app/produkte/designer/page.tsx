"use client"
import Header from "@/components/header";
import DesignerTooltip from "@/components/designer_tooltip";
import pfeil_r from "@/app/bilder/pfeil_rechts.png";
import pfeil_l from "@/app/bilder/pfeil_links.png";


export default function Designer() {

  const bild_rechts = pfeil_r;
  const bild_links = pfeil_l;

    const text1 = "Hier finden sich der Warenkorb, die Bezeichnung des Designs, Spracheinstellung und der Abmeldebutton."
    const text2 = "Hier gibt es Zeichen-Elemente zu finden."
    const text3 = "Hier können detailierte Einstellungen für die Zeichenelemente eingestellt werden."
    const text4 = "Hier befindet sich die Leinwand wo das Produkt-Design angezeigt wird."
    const text5 = "Hier befinden sih die Produktbeschreibung mit Maßen und Preis."
    const text6 = "Hier gibt es eine kleine Produktvorschau."
  
    return (
   
      <>
          <Header opacity="50%" titel="Designer"></Header>
          <div id="designerbild">
          <DesignerTooltip top="1%" left="30%" titel="Header" beschreibung={text1} bildpfad={bild_rechts}/>
          <DesignerTooltip top="10%" left="5%" titel="Zeichenelemente" beschreibung={text2} bildpfad={bild_links}/>
          <DesignerTooltip top="30%" left="53%" titel="Attribute" beschreibung={text3} bildpfad={bild_rechts}/>
          <DesignerTooltip top="10%" left="30%" titel="Canvas" beschreibung={text4} bildpfad={bild_links}/>
          <DesignerTooltip top="17%" left="53%" titel="Produktdetails" beschreibung={text5} bildpfad={bild_rechts}/>
          <DesignerTooltip top="38%" left="15%" titel="Vorschau" beschreibung={text6} bildpfad={bild_links}/>
          </div>

  </>
  
  
    );
  }
  