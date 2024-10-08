import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Punkt from "@/components/Punkt";

const MyCard = () =>
{

  const text1 = "Neue Aufträge nach Vorlage."
  const text2 = "Automatisches Erstellen von Aufträgen."
  const text3 = "Auftragsstatus-Monitor."
  const text4 = "Workflow-und Prozessauswahl."
  const text5 = "Datenaustausch mit externer Software."
  const text6 = "App zur Kommisionierung."
  const text7 = "Erstellung von Komponentenlisten nach Gummiplatten und Lagerfach."
  const text8 = "Datenaustausch mit externer Warenwirtschaft."
  const text9 = "Zuordnung von Textplatten und Gehäusen."
  const text10 = "Ausdruck der Versandpapieren."
  const text11 = "Berechnung Verpackungsvolumen."
  const text12 = "Datenübergabe an Versanddienstleister."
  const text13 = "Clipping von Layouts."
  const text14 = "Schrumpfung von Layouts um Platz zu sparen."
  const text15 = "Anordnung von Layouts."
  const text16 = "Erstellung von neuen Layouts für Stempel oder Schiler."
  const text17 = "Einbindung des Designers an Webanwendungen möglich."
  const text18 = "Buchhaltung."
  const text19 = "Kundenverwaltung."
  const text20 = "Kundenanfragen über verschiedene Medien."
  const text21 = "Kundenabfragen von verschiedenen Aufträgen."
  const text22 = "Trommelgravierer."
  const text23 = "Flachbettgravierer."

    return (
<div style={{marginLeft:"-25%",marginTop:"600px"}} className="card-container flex sm:flex-col md:flex-row flex-wrap">

<Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="auftragsannahme" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsannahme</h3></CardHeader>
      <CardBody>
        <Punkt text={text20}/>
        <Punkt text={text21}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="auftragsverwaltung" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsverwaltung</h3></CardHeader>
      <CardBody>
        <Punkt text={text1}/>
        <Punkt text={text2}/>
        <Punkt text={text3}/>
        <Punkt text={text4}/>
        <Punkt text={text5}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
      <div id="lager" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Lagermanagement</h3></CardHeader>
      <CardBody>
        <Punkt text={text6}/>
        <Punkt text={text7}/>
        <Punkt text={text8}/>
        </CardBody>
    </Card>
    
    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links ">
    <div id="montage" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Montageprogramm</h3></CardHeader>
      <CardBody>
        <Punkt text={text9}/>
        <Punkt text={text10}/>
        <Punkt text={text11}/>
        <Punkt text={text12}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="nest" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Nesting</h3></CardHeader>
      <CardBody>
        <Punkt text={text13}/>
        <Punkt text={text14}/>
        <Punkt text={text15}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="design" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Designer</h3></CardHeader>
      <CardBody>
        <Punkt text={text16}/>
        <Punkt text={text17}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links">
    <div id="software" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Externe Software</h3></CardHeader>
      <CardBody>
        <Punkt text={text18}/>
        <Punkt text={text19}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="w-[400px] sm-links ">
    <div id="gravier" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Graviermaschine</h3></CardHeader>
      <CardBody>
        <Punkt text={text22}/>
        <Punkt text={text23}/>
        </CardBody>
    </Card>

        </div>    
    )
}

export default MyCard;