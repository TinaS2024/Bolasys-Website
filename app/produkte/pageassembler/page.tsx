import { title } from "@/components/primitives";
import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/kein_bild.jpg"

export default function PageAssembler() {
  
    return (
   
      <>
      <div className="flex justify-center">
      <h3 style={{fontSize:"26pt",marginTop:"-100px",marginBottom: "100px"}} className={title({ color: "cyan", size:"sm"})}>PageAssembler</h3>
     </div>
     <div>
      <Produkt produkt="PageAssembler" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>
  
    );
  }
  