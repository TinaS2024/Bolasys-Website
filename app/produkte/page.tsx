import Produkt from "@/components/produkt";
import pfad1 from "../bilder/Designer.png";
import pfad2 from "../bilder/GPE.png";
import pfad3 from "../bilder/kein_bild.jpg";


export default function Produkte() {
  
  return (
 
    <div className="flex-col">   
      <Produkt produkt="GPE" bildpfad={pfad2} bildname="GPE"/>
      <Produkt produkt="Designer" bildpfad={pfad1} bildname="Designer"/>
      <Produkt produkt="PageAssembler" bildpfad={pfad3} bildname="PA"/>
      <Produkt produkt="Cydesigner" bildpfad={pfad3} bildname="CD"/>   
      <Produkt produkt="A la Carte" bildpfad={pfad3} bildname="KS"/>
    </div>

  );
}
