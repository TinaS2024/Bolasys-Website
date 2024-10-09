import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Punkt from "@/components/Punkt";
import Link from "next/link";

const MyCard = () =>
{

  const text1 = ["per Mail: Angebote, Auftragsannahme, Proof-Mails"]
  const text2 = ["per Webshop: Automatische Auftrags-generierung und Übernahme von Designs im GPE."]
  const text3 = ['per Shop: Kiosk-System mit direktem Anschluss an das GPE ("GPE-Frontend").']
  const text4 = ["unmittelbar im GPE, z.B. bei telefonischem Kontakt"]

  const text5 = ["Neue Aufträge nach Vorlage."]
  const text6 = ["Workflow und Prozessauswahl bei Anlegen des Auftrags."]
  const text7 = ["Automatisches Erstellen von Aufträgen."]
  const text8 = ["Positionsweises Anzeigen der Arbeitsschritte."]
  const text9 = ["Anzeige von ausgeführten und noch auszuführenden Arbeitsschritten für jede einzelne Auftragsposition."]
  const text10 = ["Wiederholung von Arbeitsschritten."]

  const text11 = ["Erstellung der für die Produkte benötigten Designs."]
  const text12 = ["Als Designsoftware kann neben dem eigenen Designer auch Fremdsoftware verwendet werden."]
  const text13 = ["Die Einbindung wird durch Makros unterstützt."]
  const text14 = ["Es können natürlich auch fertige Designs hochgeladen werden."]

  const text15 = ["Beim Nesting werden Einzeldesigns optimiert für Arbeitstische oder Materialplatten angeordnet. Dabei erfolgen verschiedene Vorverarbeitungsschritte der Design-Dateien.",<br/>,"Einzelheiten erfahren Sie hier "]
  const text16 = ["Beim Nesting werden auch Informationen zur Weiterverarbeitung erzeugt und für die weiteren Arbeitsschritte zur Verfügung gestellt."]
  
  const text17 = ["Erstellung von Komponentenlisten angepasst an Produktionseinheiten wie z.B. Gummiplatten bei der Herstellung von Gummistempeln und Wegoptimierung im Lager."]
  const text18 = ["Austausch mit externer Warenwirtschaft ist optional."]

  const text19 = ["Im Fall der Stempelproduktion ist eine besonders gute Integration der Drumfire-Maschine (Link) der Cylas AG vorhanden."]
  const text20 = ["Es können jedoch auch Flachbettlaser anderer Hersteller zur Schilderproduktion verwendet werden."]
  const text21 = ["Mechanische Graviergeräte und 3D-Drucker können optional eingebunden werden."]

  const text22 = ["Die Station (Software) ist für die Montage von Gummitextplatten auf Stempelgeräte optimiert."]
  const text23 = ["Die Zuordnung einzelner Textplatten und zugehöriger Geräte wird in einfacher Weise auftragsorientiert gewährleistet. Hier kann auch bereits die Verpackung und der Ausdruck von Adressaufklebern erfolgen."]

  const text24 = ["Es können Teil- und Sammellieferungen durchgeführt werden."]
  const text25 = ["Die Beauftragung unterschiedlicher Lieferdienste wird unterstützt."]

  const text26 = ["Die Kombination mit cloudgestützter oder lokaler ERP-Software zur Buchhaltung ist vorgesehen."]
  const text27 = ["Auch andere Module externer Software können angeschlossen oder synchronisiert werden (z.B. Designeditoren oder Kundenverwaltung und Lagerverwaltung)."]
  const text28 = ["Die Verwendung einer Datev-Schnittstelle ist ebenfalls möglich."]

  const text29 = ["BPMN"]
  const text30 = ["RabbitMQ"]

    return (
<div style={{marginLeft:"-25%",marginTop:"600px"}} className="card-container flex sm:flex-col md:flex-row flex-wrap">

<Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="auftragsannahme" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsvorbereitung und Annahme</h3></CardHeader>
      <CardBody>
        <Punkt text={text1}/>
        <Punkt text={text2}/>
        <Punkt text={text3}/>
        <Punkt text={text4}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="auftragsverwaltung" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsverwaltung</h3></CardHeader>
      <CardBody>
        <Punkt text={text5}/>
        <Punkt text={text6}/>
        <Punkt text={text7}/>
        <Punkt text={text8}/>
        <Punkt text={text9}/>
        <Punkt text={text10}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="design" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Designer</h3></CardHeader>
      <CardBody>
        <Punkt text={text11}/>
        <Punkt text={text12}/>
        <Punkt text={text13}/>
        <Punkt text={text14}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="nest" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Nesting</h3></CardHeader>
      <CardBody>
        <Punkt text={text15}/><Link style={{marginTop:"-53px",marginLeft:"232px",paddingBottom:"30px"}} className="text-md text-[#5ec4d2]" href="/produkte/nestingsoftware">Nesting...</Link>
        <Punkt text={text16}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
      <div id="lager" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Komissionierungsmanagement</h3></CardHeader>
      <CardBody>
        <Punkt text={text17}/>
        <Punkt text={text18}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links ">
    <div id="gravier" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Interface für Graviermaschinen</h3></CardHeader>
      <CardBody>
        <Punkt text={text19}/>
        <Punkt text={text20}/>
        <Punkt text={text21}/>
        </CardBody>
    </Card>
    
    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links ">
    <div id="montage" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Montagestation</h3></CardHeader>
      <CardBody>
        <Punkt text={text22}/>
        <Punkt text={text23}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links ">
    <div id="transport" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Komissionierungs-und Versandmodul</h3></CardHeader>
      <CardBody>
        <Punkt text={text24}/>
        <Punkt text={text25}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="software" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Externe Software</h3></CardHeader>
      <CardBody>
        <Punkt text={text26}/>
        <Punkt text={text27}/>
        <Punkt text={text28}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"500px"}} className="w-[400px] sm-links">
    <div id="service" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Microservice</h3></CardHeader>
      <CardBody>
        <Punkt text={text29}/>
        <Punkt text={text30}/>
        </CardBody>
    </Card>
    
        </div>    
    )
}

export default MyCard;