"use client"
import Header from "@/components/header";
import OwnModal_nolink from "@/components/ownmodal_nolink";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import DesignerTooltip from "@/components/designer_tooltip";
import pfeil_r from "@/app/bilder/pfeil_rechts.png";
import pfeil_l from "@/app/bilder/pfeil_links.png";


export default function Designer() {

  const bild_rechts = pfeil_r;
  const bild_links = pfeil_l;

    const text1 = ["Warenkorb mit Bezeichnung des Designs, sowie der Spracheinstellung und des Abmeldebutton."]
    const text2 = ["Zeichen-Elemente zum Erstellen des Designs:",<br/>,"1. Normaler Text",<br/>, "2. Schräger Text",<br/>,"3. Rechteck",<br/>,"4. Kreis",<br/>,"5. Ellipse",<br/>,"6. Linie",<br/>,"7. Upload für eigene Bilder."]
    const text3 = ["Detailierte Einstellungen für die Zeichenelemente, inklusive erweiterte Einstellungen"]
    const text4 = ["Canvas-Anzeige des erstellten Produkts."]
    const text5 = ["Produktbeschreibung mit Maßen und Preis."]
    const text6 = ["Minimierte Produktvorschau."]


    return (
   
      <>
      <div style={{marginLeft:"50%"}}>
      <Header opacity="100%"></Header>  
      </div>
      <div>
    <Titel_Subtitel_nolink titel="Designer" subtitel=""/>  
    </div>
          <div id="designerbild">
            <div><DesignerTooltip top="-1%" left="30%" titel="Header" beschreibung={text1} bildpfad={bild_rechts}/><OwnModal_nolink className="pfeil1" titel="Header" inhalt={text1}/></div>
            <div><DesignerTooltip top="10%" left="5%" titel="Zeichenelemente" beschreibung={text2} bildpfad={bild_links}/><OwnModal_nolink className="pfeil2" titel="Zeichenelemente" inhalt={text2}/></div>
            <div><DesignerTooltip top="30%" left="53%" titel="Attribute" beschreibung={text3} bildpfad={bild_rechts}/><OwnModal_nolink className="pfeil3" titel="Attribute" inhalt={text3}/></div>
            <div><DesignerTooltip top="10%" left="30%" titel="Canvas" beschreibung={text4} bildpfad={bild_links}/><OwnModal_nolink className="pfeil4" titel="Canvas" inhalt={text4}/></div>
            <div><DesignerTooltip top="17%" left="53%" titel="Produktdetails" beschreibung={text5} bildpfad={bild_rechts}/><OwnModal_nolink className="pfeil5" titel="Produktdetails" inhalt={text5}/></div>
            <div><DesignerTooltip top="38%" left="15%" titel="Vorschau" beschreibung={text6} bildpfad={bild_links}/><OwnModal_nolink className="pfeil6" titel="Vorschau" inhalt={text6}/></div>
          </div>
  </>
  
  
    );
  }
  