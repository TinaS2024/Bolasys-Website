import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/kein_bild.jpg"
import Header from "@/components/header";

export default function PageAssembler() {
  
    return (
   
      <>
          <Header opacity="100%" titel="PageAssembler"></Header>
      <div className="flex justify-center">
      <Produkt produkt="PageAssembler" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>
  
    );
  }
  