"use client"
import { Background } from "@/components/background";
import Titel_Subtitel from "@/components/titel_subtitel";
import logo from "@/app/bilder/logo.png";
import Image from "next/image";


export default function Home() 
{
  
  return (
    <>

  <div className="flex justify-center" style={{marginTop:"-320px"}}>
  </div>
  <div  className="flex justify-center"> 
    <Image width={100} height={50} src={logo} alt="logo"/>
    </div>
  <div className="flex justify-center">  
    
    <h3 style={{fontSize:"40pt",marginTop:"-50px"}} className="text-white pt-20">Bolasys GmbH</h3>
    </div>
   

    <div className="flex justify-center">
 <h3 style={{fontSize:"22pt"}} className="text-white text-center"> Herstellung, Installation und Wartung von Software- und Hardwaresystemen</h3>
  </div>  
  
  <div className="home_titel flex flex-row sm:flex-col md:flex-row absolute abstand_oben abstand_links py-10">  

    <Titel_Subtitel titel="GPE" subtitel="Produktionsvertriebsumgebung für grafische Produkte" path="/produkte/gpe"></Titel_Subtitel>     
    <Titel_Subtitel titel="DESIGNER" subtitel="Layouterstellung für eingebettete Webanwendungen und als Standalone-Systeme" path="/produkte/designer"></Titel_Subtitel>
    {/*<Titel_Subtitel titel="CYDESIGNER" subtitel="zur Erzeugung von Stempel-Layouts im PC" path="/produkte/cydesigner"></Titel_Subtitel> */} 
    <Titel_Subtitel titel="NESTING" subtitel="zur optimalen Nutzung ihrer Produktionssysteme" path="/produkte/nestingsoftware"></Titel_Subtitel>
    <Titel_Subtitel titel="UI" subtitel="Bedienoberflächen für Lasergravierer und ähnliche Produktionssysteme" path="/produkte/ui"></Titel_Subtitel>
  </div>  
  <div id="home_bg"><Background left="0" opacity="40%"></Background></div>

  </>

  );
}
