
import Header from "@/components/header";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";

import NestingCard from "@/components/nesting_card";
import bild1 from "@/app/bilder/clipping_abstand.svg";
import bild2 from "@/app/bilder/schrumpfen_nest.svg";
import bild3 from "@/app/bilder/schrumpfen_gpe.svg";
import bild4 from "@/app/bilder/grosse_formen.svg";
import bild5 from "@/app/bilder/gleiche_formen.svg";
import bild6 from "@/app/bilder/clipping_ohne_abstand.svg";
import stempel1 from "@/app/bilder/mit_abstand_o_clipping.png";
import stempel2 from "@/app/bilder/ohne_abstand_o_clipping.png";
import stempel3 from "@/app/bilder/schrumpfen_bolanest.png";
import stempel4 from "@/app/bilder/gpe_schrumpfen.png";
import stempel5 from "@/app/bilder/anordnung_bolanest.png";
import stempel6 from "@/app/bilder/anordnen_gpe.png";

export default function Nesting() {

  const text1 = "Wir bieten Software an um Designs auf einer Arbeitsfläche oder Materialplatte automatisch platzsparend anzuordnen."
  const text2 = "Die Stempel-Designs werde mit Abstand zueinander beschnitten. Dies ist mit Bolanest möglich."
  const text3 = "Die Auswahl des Einzeldesigns wird abgerundet verkleinert."
  const text4 = "Die Auswahl des Einzeldesigns wird eckig verkleinert."
  const text5 = "Die Nestingsoftware legt zuerst große Formen zusammen und füllt Lücken mit kleineren Elementen aus. Dreiecke kann Bolanest nicht zusammenlegen wie das GPE."
  const text6 = "Das GPE sucht nach ähnlichen Formen und legt sie zusammen."
  const text7 = "Die Stempel-Designs werden ohne Abstand zueinander beschnitten. Dies ist mit Bolanest und GPE möglich."
    
  return (
   
      <>
      <div style={{marginLeft:"50%"}}>
      <Header opacity="100%"></Header>  
      </div>
      
      <div style={{width:"500px"}}>
       <Titel_Subtitel_nolink titel="Nesting" subtitel={text1}/>     
      <div id="nesting-card1" className="flex flex-row abstand_unten_klein" >
      <NestingCard pathstemp={stempel1} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 1A: Einfaches Clipping mit Abstand" path={bild1} width={150} height={150} beschreibung={text2}/>
      <NestingCard pathstemp={stempel2} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 1B: Einfaches Clipping ohne Abstand" path={bild6} width={150} height={150} beschreibung={text7}/>
      </div>

    <div id="nesting-card2" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel3} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 2A: Komplexeres Clipping mit Schrumpfen durch Bolanest" path={bild2} width={100} height={100} beschreibung={text3} />
      <NestingCard pathstemp={stempel4} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 2B: Komplexeres Clipping mit Schrumpfen durch GPE" path={bild3} width={100} height={100} beschreibung={text4} />
    </div>

    <div id="nesting-card3" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel5} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 3A: Anordnung durch Bolanest" path={bild4} width={100} height={100} beschreibung={text5} />
      <NestingCard pathstemp={stempel6} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Schritt 3B: Anordnung durch GPE" path={bild5} width={100} height={100} beschreibung={text6} />
    </div>
 
    </div>
  </>
  
    );
  }
  