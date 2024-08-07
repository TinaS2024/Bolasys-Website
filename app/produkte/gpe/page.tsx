"use client"

import Header from "@/components/header";
import { Graph } from "@/components/graph";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Punkt from "@/components/Punkt";


export default function GPE() {

  const text1 = "Neue Aufträge nach Vorlage"
  const text2 = "Automatisches Erstellen von Aufträgen"
  const text3 = "Auftragsstatu-Monitor"
  const text4 = "Workflow-und Prozessauswahl"
  const text5 = "Datenaustausch mit externer Software"
  const text6 = "App zur Kommisionierung"
  const text7 = "Erstellung von Komponentenlisten nach Gummiplatten und Lagerfach"
  const text8 = "Datenaustausch mit externer Warenwirschaft"
  const text9 = "Zuordnung von Textplaten und Gehäusen"
  const text10 = "Ausdruck der Versandpapiere"
  const text11 = "Berechnung Verpackungsvolumen"
  const text12 = "Datenübergabe an Versanddienstleister"
  
    return (
      <>
    <Header titel="GPE" opacity="100%"></Header>
<div className="card-container flex sm:flex-col md:flex-row abstand_unten">
    <Card style={{margin:"15px"}} className="max-w-[400px]">
      <CardHeader> <h3 className="text-[#2695a0] text-xl">Auftragsverwaltung</h3></CardHeader>
      <CardBody>
        <Punkt text={text1}/>
        <Punkt text={text2}/>
        <Punkt text={text3}/>
        <Punkt text={text4}/>
        <Punkt text={text5}/>
        </CardBody>
    </Card>

    <Card style={{margin:"15px"}} className="max-w-[400px]">
      <CardHeader> <h3 className="text-[#2695a0] text-xl">Lagermanagement</h3></CardHeader>
      <CardBody>
        <Punkt text={text6}/>
        <Punkt text={text7}/>
        <Punkt text={text8}/>
        </CardBody>
    </Card>

    
    <Card style={{margin:"15px"}} className="max-w-[400px]">
      <CardHeader> <h3 className="text-[#2695a0] text-xl">Montageprpgramm</h3></CardHeader>
      <CardBody>
        <Punkt text={text9}/>
        <Punkt text={text10}/>
        <Punkt text={text11}/>
        <Punkt text={text12}/>
        </CardBody>
    </Card>
    </div>

    <Graph></Graph>
   
      </>
    );
  }
  