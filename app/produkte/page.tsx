import Produkt from "@/components/produkt";
import pfad1 from "../bilder/Designer.png";
import pfad2 from "../bilder/GPE.png";

export default function Produkte() {
  
  return (
    <div>
      <Produkt produkt="Rossini-Redux-Stempel-Web-Designer" bildpfad={pfad1} bildname="Designer"/>
      <br />
      <Produkt produkt="GPE" bildpfad={pfad2} bildname="GPE"/>
    </div>
  );
}
