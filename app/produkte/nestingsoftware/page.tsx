
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
import stamp1 from "@/app/bilder/2_ausschnitt.png";
import stempel2 from "@/app/bilder/ohne_abstand_o_clipping.png";
import stamp2 from "@/app/bilder/1_ausschnitt.png";
import stempel3 from "@/app/bilder/schrumpfen_bolanest.png";
import stempel4 from "@/app/bilder/gpe_schrumpfen.png";
import stempel5 from "@/app/bilder/anordnung_bolanest.png";
import stempel6 from "@/app/bilder/anordnen_gpe.png";

export default function Nesting() {

  const text1 = "Platzparendes automatisches Anordnen ihrer Designs auf einer Arbeisfläche oder Materialplatte. Die Software gestattet automatische (voreingestellte) Vorverarbeitung von Designs, automatisches Entfernen und Hinzufügen von Schneidkonturen, verschiedene Anordnungsoptionen und Weitergabe von Anordnungsdaten für nachfolgende Arbeitsschritte. Die im Weiteren verwerteten Anordnungsdaten gestatten das Softwaregestützte Auffinden von Designs auf der Materialplatte bei der Weiterverarbeitung. Die folgenden Beispiele beziehen sich auf das Nesting von stempeldesigns auf Gummiplatten. "
  const text2 = "Die Designs werden auf Minimalgröße zuzüglich eines voreingestellten Randes beschnitten, mit einem rechteckigen Schneidrahmen versehen und optimiert angeordnet.Nicht benutzte Flächen werden nicht graviert. Material, Filter, Energiekosten und Arbeitszeit werden gespart."
  const text3 = "Die Entfernung der doppelten Schneidlinien führt zu weiterer Ersparnis, vor allem bei der zum Ausschneiden benötigten Zeit."
  const text4 = 'Schrumpfen ermöglicht weitere Einsparung von Filter- und Stromkosten. Durch Wegschneiden möglicherweise abdruckender größerer leerer Bereiche wird die zu gravierende Fläche weiter vermindert. Zusätzlich kann dadurch eventuell die Relieftiefe reduziert werden. Dies führt zu weiteren Einsparungen von Zeit, Energie und Filtern. Schrumpfen nach Methode 1 zeichnet sich durch einstellbar verrundete Ecken und einstellbares "Hineinschrumpfen" in Zwischenräume aus.'
  const text5 = "Die Nestingsoftware legt zuerst große Formen zusammen und füllt Lücken mit kleineren Elementen aus. Dreiecke kann Bolanest nicht zusammenlegen wie das GPE."
  const text6 = "Die Dicht der Anordnung wird durch die beim Beschneiden erzeugten Rechtecke begrenzt. Weitere Verbesserungen können in Beispiel 3B erziehlt werden.	"
  const text7 = "Das GPE-Nesting sucht zunächst nach ähnlichen Formen und legt diese möglichst unter Vermeidung doppelter schneidlinien zusammen."
    
  return (
   
      <>
      <div style={{marginLeft:"50%"}}>
      <Header opacity="100%"></Header>  
      </div>
      <div style={{marginLeft:"-10%",width:"700px"}}><Titel_Subtitel_nolink titel="Nesting" subtitel={text1}/> </div>
      <div style={{width:"500px"}}>
      <div id="nesting-card1" className="flex flex-row abstand_unten_klein" >
      <NestingCard pathstemp={stamp1} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Beispiel 1A: Clippen, rechteckige Schneidlinien, Standardabstand" path={bild1} width={150} height={150} beschreibung={text2}/>
      <NestingCard pathstemp={stamp2} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel='Beispiel 1B: Vermeidung "doppelter" Schneidlinien' path={bild6} width={150} height={150} beschreibung={text7}/>
      </div>

    <div id="nesting-card2" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel3} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Beispiel 2A: Clippen und Schrunmpfen 1" path={bild2} width={100} height={100} beschreibung={text3} />
      <NestingCard pathstemp={stempel4} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Beispiel 2B: Clippen und Schrumpfen 2" path={bild3} width={100} height={100} beschreibung={text4} />
    </div>

    <div id="nesting-card3" className="flex flex-row abstand_unten_klein">
      <NestingCard pathstemp={stempel5} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Beispiel 3A: Anordnung mit Schrumpfen nach Beispiel 2A" path={bild4} width={100} height={100} beschreibung={text5} />
      <NestingCard pathstemp={stempel6} className="mr-5 md:min-w-[500px] sm:max-w-[200px]" titel="Beispiel 3B: Anordnung nach Beispiel 2B" path={bild5} width={100} height={100} beschreibung={text6} />
    </div>
 
    </div>
  </>
  
    );
  }
  