import { title } from "@/components/primitives";
import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/GPE.png";

export default function GPE() {
  
    return (
   <>
      <div className="flex justify-center">
      <h3 style={{fontSize:"26pt",marginTop:"-100px",marginBottom: "100px"}} className="text-[#2695a0]">GPE</h3>
     </div>
     <div>
      <Produkt produkt="GPE" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>
    );
  }
  