import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Punkt from "@/components/Punkt";
import Link from "next/link";

const MyCard = () =>
{
  const text1 = ["unmittelbar im GPE, z.B. bei telefonischem Kontakt"]
  const text2 = ["per Mail: Angebote, Auftragsannahme, Proof-Mails"]
  const text3 = ['per Shop: Kiosk-System mit direktem Anschluss an das GPE ("GPE-Frontend").']  
  const text4 = ["per Webshop: Automatische Auftrags-generierung und Übernahme von Designs im GPE."]
  

  const text5 = ["Erstellen neuer Aufträge nach Vorlagen oder durch Kopieren und Editieren bestehender Aufträge."]
  const text6 = ["Workflow und Prozessauswahl bei Anlegen eines Auftrags."]
  const text7 = ["Automatisches Erstellen von Aufträgen."]
  const text8 = ["Editieren des Workflows von laufenden Aufträgen oder Positionen, z.b. Wiederholung von Arbeitsschritten"]

  const text11 = ["Erstellung der für die Produkte benötigten Designs."]
  const text12 = ["Als Designsoftware kann neben dem eigenen Designer auch Fremdsoftware verwendet werden."]
  const text13 = ["Die Einbindung von Fremdsoftware wird durch Makros unterstützt."]
  const text14 = ["Logos oder fertige Designs können hochgeladen werden."]

  const text15 = ["Beim Nesting werden Einzeldesigns optimiert für Arbeitstische oder Materialplatten angeordnet.",<br/>,"Dabei erfolgen verschiedene Vorverarbeitungsschritte der Design-Dateien. Einzelheiten erfahren Sie"]
  const text16 = ["Zusätzlich werden Schneidlinien und zur Weiterverarbeitung notwendige Daten erzeugt und für nachfolgende Arbeitsschritte aufbereitet."]
  
  const text17 = ["Erstellung von Komponentenlisten angepasst an Produktionseinheiten wie z.B. Gummiplatten bei der Herstellung von Gummistempeln."]
  const text18 = ["Wegoptimierung im Lager."]
  const text19 = ["Austausch mit externer Warenwirtschaft ist optional."]

  const text20 = ["Flachbettlaser verschiedener Hersteller zur Schilderproduktion können verwendet werden."]
  const text21 = ["Mechanische Graviergeräte und 3D-Drucker können eingebunden werden."]
  const text22 = ["Für die Stempelproduktion ist eine umfassende Integration der Drumfire-Maschine der Cylas Ag vorhanden."]

  const text23 = ["Die Station (Software) ist für die Montage von Gummitextplatten auf Stempelgeräte optimiert."]
  const text24 = ["Die Zuordnung einzelner Textplatten und zugehöriger Geräte wird in einfacher Weise auftragsorientiert gewährleistet.",<br/>,"Hier kann auch bereits die Verpackung und der Ausdruck von Adressaufklebern erfolgen."]

  const text25 = ["Es können Teil- und Sammellieferungen durchgeführt werden."]
  const text26 = ["Die Beauftragung unterschiedlicher Lieferdienste wird unterstützt."]

  const text27 = ["Die Kombination mit cloudgestützter oder lokaler ERP-Software zur Buchhaltung ist vorgesehen."]
  const text28 = ["Andere Module externer Software können angeschlossen oder synchronisiert werden (z.B. Designeditoren oder Kundenverwaltung und Lagerverwaltung)."]
  const text29 = ["Die Verwendung einer Datev-Schnittstelle ist möglich."]

  const text30 = ["Workflowsystem mit BPMN.",<br/>,"Schnittstelle zur Verwaltung von Microservices."]
  const text31 = ["Message-Broker."]
  const text32 = ["Datenbank POSGREQL"]

    return (
<div style={{marginTop:"750px"}} className="card-container flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start">

<Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="auftragsannahme" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsvorbereitung & Annahme</h3></CardHeader>
      <CardBody>
        <Punkt text={text1}/>
        <Punkt text={text2}/>
        <Punkt text={text3}/>
        <Punkt text={text4}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="auftragsverwaltung" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsverwaltung</h3></CardHeader>
      <CardBody>
        <Punkt text={text5}/>
        <Punkt text={text6}/>
        <Punkt text={text7}/>
        <Punkt text={text8}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="design" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Designer</h3></CardHeader>
      <CardBody>
        <Punkt text={text11}/>
        <Punkt text={text12}/>
        <Punkt text={text13}/>
        <Punkt text={text14}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="nest" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Nesting</h3></CardHeader>
      <CardBody>
        <Punkt text={text15}/>
        <Link style={{marginTop:"-53px",marginLeft:"110px",paddingBottom:"30px"}} className="text-md text-[#5ec4d2]" href="/produkte/nestingsoftware">hier</Link>
        <Punkt text={text16}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
      <div id="lager" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Komissionierungsmanagement</h3></CardHeader>
      <CardBody>
        <Punkt text={text17}/>
        <Punkt text={text18}/>
        <Punkt text={text19}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="gravier" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Interface für Graviermaschinen</h3></CardHeader>
      <CardBody>
        <Punkt text={text20}/>
        <Punkt text={text21}/>
        <Punkt text={text22}/>
        </CardBody>
    </Card>
    
    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="montage" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Montagestation</h3></CardHeader>
      <CardBody>
        <Punkt text={text23}/>
        <Punkt text={text24}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="transport" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Komissionierungs-& Versandmodul</h3></CardHeader>
      <CardBody>
        <Punkt text={text25}/>
        <Punkt text={text26}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="software" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Externe Software</h3></CardHeader>
      <CardBody>
        <Punkt text={text27}/>
        <Punkt text={text28}/>
        <Punkt text={text29}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px",height:"680px"}} className="lg:w-[400px] sm:max-w-[320px]">
    <div id="gpe" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">GPE-Basis</h3></CardHeader>
      <CardBody>
        <Punkt text={text30}/>
        <Punkt text={text31}/>
        <Punkt text={text32}/>
        </CardBody>
    </Card>
    
        </div>    
    )
}

export default MyCard;