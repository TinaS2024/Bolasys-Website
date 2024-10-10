
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";

import NestingCard from "@/components/nesting_card";
import bild1 from "@/app/bilder/clipping_abstand.svg";
import bild2 from "@/app/bilder/schrumpfen_nest.svg";
import bild3 from "@/app/bilder/schrumpfen_gpe.svg";
import bild4 from "@/app/bilder/grosse_formen.svg";
import bild5 from "@/app/bilder/gleiche_formen.svg";
import bild6 from "@/app/bilder/clipping_ohne_abstand.svg";
import stamp1 from "@/app/bilder/2_ausschnitt.png";
import stamp2 from "@/app/bilder/1_ausschnitt.png";
import stempel3 from "@/app/bilder/schrumpfen_bolanest.png";
import stempel4 from "@/app/bilder/gpe_schrumpfen.png";
import stempel5 from "@/app/bilder/anordnung_bolanest.png";
import stempel6 from "@/app/bilder/anordnen_gpe.png";

export default function Nesting() {

  const text1 = ["Platzparendes automatisches Anordnen ihrer Designs auf einer Arbeitsfläche oder Materialplatte.",<br/> ,"Die Software gestattet automatische (voreingestellte) Vorverarbeitung von Designs, automatisches Entfernen und Hinzufügen von Schneidkonturen, verschiedene Anordnungsoptionen und Weitergabe von Anordnungsdaten für nachfolgende Arbeitsschritte.",<br/>,"Die im Weiteren verwerteten Anordnungsdaten gestatten das Softwaregestützte Auffinden von Designs auf der Materialplatte bei der Weiterverarbeitung.",<br/>, "Die folgenden Beispiele beziehen sich auf das Nesting von Stempeldesigns auf Gummiplatten."]
  const text2 = ["Die Designs werden auf Minimalgröße zuzüglich eines voreingestellten Randes beschnitten, mit einem rechteckigen Schneidrahmen versehen und optimiert angeordnet.",<br/>, "Nicht benutzte Flächen werden nicht graviert.",<br/>,"Material, Filter, Energiekosten und Arbeitszeit werden gespart."]
  const text3 = ["Die Entfernung der doppelten Schneidlinien führt zu weiterer Ersparnis, vor allem bei der zum Ausschneiden benötigten Zeit.",<br/>,"Im Beispiel 3A kommt das Schrumpfen & Clipping hinzu."]
  const text4 = ['Schrumpfen ermöglicht weitere Einsparung von Filter- und Stromkosten.',<br/>,'Durch Wegschneiden möglicherweise abdruckender größerer leerer Bereiche wird die zu gravierende Fläche weiter vermindert.',<br/>,'Zusätzlich kann dadurch eventuell die Relieftiefe reduziert werden.',<br/>,'Dies führt zu weiteren Einsparungen von Zeit, Energie und Filtern.',<br/>,'Schrumpfen nach Methode 1 zeichnet sich durch einstellbar verrundete Ecken und einstellbares "Hineinschrumpfen" in Zwischenräume aus.']
  const text5 = ['Die relativ glatten Schneidlinien ermöglichen durch "Überlappen" der Designs in vielen Fällen eine noch platzsparendere Anordnung (vergl. Beispiel 3).']
  const text6 = ["Die Dichte der Anordnung wird durch die beim Beschneiden erzeugten Rechtecke begrenzt.",<br/>,"Weitere Verbesserungen können in Beispiel 3B erziehlt werden.	"]
  const text7 = ["Das GPE-Nesting sucht zunächst nach ähnlichen Formen und legt diese möglichst unter Vermeidung doppelter schneidlinien zusammen."]
    

  return (
   
      <>
      <div style={{marginLeft:"50%"}}>
      <HeaderNeu></HeaderNeu>  
      <Background left="-240px" opacity="20%"></Background>
      </div> 
      <div className="nesting_text"><Titel_Subtitel_nolink titel="Nesting" subtitel={text1}/> </div>
      <div style={{width:"500px"}}>
      <div id="nesting-card1" className="flex flex-row abstand_unten_klein" >
      <NestingCard pathstemp={stamp1} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel="Beispiel 1A: Clippen, rechteckige Schneidlinien, Standardabstand" path={bild1} width={150} height={150} beschreibung={text2}/>
      <NestingCard pathstemp={stamp2} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel='Beispiel 1B: Vermeidung "doppelter" Schneidlinien' path={bild6} width={150} height={150} beschreibung={text3}/>
      </div>

    <div id="nesting-card2" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel3} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel="Beispiel 2A: Clippen und Schrumpfen 1" path={bild2} width={100} height={100} beschreibung={text4} />
      <NestingCard pathstemp={stempel4} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel="Beispiel 2B: Clippen und Schrumpfen 2" path={bild3} width={100} height={100} beschreibung={text5} />
    </div>

    <div id="nesting-card3" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel5} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel="Beispiel 3A: Anordnung mit Schrumpfen nach Beispiel 2A" path={bild4} width={100} height={100} beschreibung={text6} />
      <NestingCard pathstemp={stempel6} className="mr-5 md:min-w-[550px] sm:min-w-[200px]" titel="Beispiel 3B: Anordnung nach Beispiel 2B" path={bild5} width={100} height={100} beschreibung={text7} />
    </div>
 
    </div>
  </>
  
    );
  }
  