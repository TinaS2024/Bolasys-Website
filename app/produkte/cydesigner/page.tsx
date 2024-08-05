
import Produkt from "@/components/produkt";
import bild1 from "@/app/bilder/kein_bild.jpg"

export default function CyDesigner() {
  
    return (
   
      <>
      <div className="flex justify-center">
      <h3 style={{fontSize:"26pt",marginTop:"-100px",marginBottom: "100px"}} className="text-[#2695a0]">CyDesigner</h3>
     </div>
     <div>
      <Produkt produkt="CyDesigner" bildpfad={bild1} bildname="GPE"/>
      </div>
  </>
  
    );
  }
  