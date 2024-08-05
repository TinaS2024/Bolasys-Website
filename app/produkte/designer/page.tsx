import { title } from "@/components/primitives";
import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/Designer.png";

export default function Designer() {
  
    return (
   
      <>
      <div className="flex justify-center">
      <h3 style={{fontSize:"26pt",marginTop:"-100px",marginBottom: "100px"}} className="text-[#2695a0]">Designer</h3>
     </div>
     <div>
      <Produkt produkt="Designer" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>
  
  
    );
  }
  