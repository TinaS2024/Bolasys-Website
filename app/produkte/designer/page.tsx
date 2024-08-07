
import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/Designer.png";
import bild2 from "@/app/bilder/kein_bild.jpg"
import Header from "@/components/header";

export default function Designer() {
  
    return (
   
      <>
          <Header opacity="100%" titel="Designer"></Header>
     <div>
      <Produkt produkt="Stempel & Schilder-Designer" bildpfad={bild1} bildname="designer1"/>
      </div>
      <div>
      <Produkt produkt="Cydesigner" bildpfad={bild2} bildname="designer2"/>
      </div>
  </>
  
  
    );
  }
  