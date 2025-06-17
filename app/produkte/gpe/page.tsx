"use client"

import HeaderNeu from "@/components/header_new";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import { Graph } from "@/components/graph";
import MyCard from "@/components/mycard";
import { Background } from "@/components/background";


export default function GPE() {

  const text =["Vertriebs und Produktionsumgebung im Besonderen für graphische Erzeugnisse, wie Schilder, Stempel, personalisierte Produkte und Druckerzeugnisse.",<br/>, "Das GPE unterstützt Arbeitsschritte vom Angebot bis Versand. Dabei werden automatisch ablaufende Computerprozesse und von Personen ausgeführte Arbeitsprozesse eingebunden.",<br/>, "Als Ausgabegeräte sind Lasersysteme eingebunden. Andere Ausgabegeräte können hinzugefügt werden.",<br/>, "Zur Buchhaltung existieren Anbindungen an externe Systeme. "]

  
    return (
      <> 
     <div>
      <HeaderNeu></HeaderNeu>  
      <Background top="-350px" left="0px" opacity="10%"></Background>
      </div>
      
    <div className="gpe_text">
    <Titel_Subtitel_nolink titel="GPE" subtitel={text}/>  
    </div>
     
    <Graph></Graph>
    <MyCard></MyCard>

   
      </>
    );
  }
  