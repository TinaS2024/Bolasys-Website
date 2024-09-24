import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Punkt from "@/components/Punkt";
//Probleme bei NextUi: Card-Header hat standartmäßig z-index von 10 und überlappt Hedaer, Card-Header lässt Navbar verschwinden, Header wird kleiner bei Fensterverkleinerung

const MyCard = () =>
{

  const text1 = "Neue Aufträge nach Vorlage über Telefon, E-Mail, (Web)-Shop oder Computer"
  const text2 = "Automatisches Erstellen von Aufträgen"
  const text3 = "Auftragsstatus-Monitor"
  const text4 = "Workflow-und Prozessauswahl"
  const text5 = "Datenaustausch mit externer Software"
  const text6 = "App zur Kommisionierung"
  const text7 = "Erstellung von Komponentenlisten nach Gummiplatten und Lagerfach"
  const text8 = "Datenaustausch mit externer Warenwirtschaft"
  const text9 = "Zuordnung von Textplatten und Gehäusen"
  const text10 = "Ausdruck der Versandpapieren"
  const text11 = "Berechnung Verpackungsvolumen"
  const text12 = "Datenübergabe an Versanddienstleister"
  const text13 = "Clipping von Layouts"
  const text14 = "Schrumpfung von Layouts um Platz zu sparen"
  const text15 = "Anordnung von Layouts"
  const text16 = "Erstellung von neuen Layouts für Stempel oder Schiler"
  const text17 = "Einbindung des Designers an Webanwendungen möglich"

    return (
<div style={{marginLeft:"-50%",marginTop:"600px"}} className="card-container flex sm:flex-col md:flex-row">
    <Card style={{margin:"15px",marginBottom:"100px"}} className="max-w-[400px]">
    <div id="auftrag" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Auftragsverwaltung</h3></CardHeader>
      <CardBody>
        <Punkt text={text1}/>
        <Punkt text={text2}/>
        <Punkt text={text3}/>
        <Punkt text={text4}/>
        <Punkt text={text5}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="max-w-[400px]">
      <div id="lager" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Lagermanagement</h3></CardHeader>
      <CardBody>
        <Punkt text={text6}/>
        <Punkt text={text7}/>
        <Punkt text={text8}/>
        </CardBody>
    </Card>
    
    <Card style={{margin:"15px",marginBottom:"100px"}} className="max-w-[400px]">
    <div id="montage" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Montageprogramm</h3></CardHeader>
      <CardBody>
        <Punkt text={text9}/>
        <Punkt text={text10}/>
        <Punkt text={text11}/>
        <Punkt text={text12}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"100px"}} className="max-w-[400px]">
    <div id="nest" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Nesting</h3></CardHeader>
      <CardBody>
        <Punkt text={text13}/>
        <Punkt text={text14}/>
        <Punkt text={text15}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px",marginBottom:"500px"}} className="max-w-[400px]">
    <div id="design" className="sprung"></div>
      <CardHeader style={{zIndex: "0"}}> <h3 className="text-[#2695a0] text-xl">Designer</h3></CardHeader>
      <CardBody>
        <Punkt text={text16}/>
        <Punkt text={text17}/>
        </CardBody>
    </Card>

        </div>    
    )
}

export default MyCard;