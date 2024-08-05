import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/kein_bild.jpg"

export default function AlaCarte() {
  
    return (
     
      <>
      <div className="flex justify-center">
      <h3 style={{fontSize:"26pt",marginTop:"-100px",marginBottom: "100px"}} className="text-[#2695a0]">A la Carte</h3>
     </div>
     <div>
      <Produkt produkt="A la Carte" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>

    );
  }
  