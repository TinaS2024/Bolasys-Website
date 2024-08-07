import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/kein_bild.jpg"
import Header from "@/components/header";

export default function UI() {
  
    return (
     
      <>
          <Header opacity="100%" titel="UI"></Header>
     <div>
      <Produkt produkt="UI" bildpfad={bild1} bildname="UI"/>
      </div>
  </>

    );
  }
  