"use client"
import { Background } from "@/components/background";
import Titel_Subtitel from "@/components/titel_subtitel";


export default function Home() 
{
  return (
    <>
  <div className="flex justify-center" style={{marginTop:"-300px"}}>
 <h3 style={{fontSize:"40pt"}} className="text-white">Bolasys GmbH</h3>
  </div>
  <div className="flex justify-center">
 <h3 style={{fontSize:"30pt"}} className="text-white">in Chemnitz</h3>
  </div>
  <div style={{zIndex: "1"}} className="flex flex-row sm:flex-col md:flex-row absolute abstand_oben abstand_links">  

    <Titel_Subtitel titel="GPE" subtitel="zur Herstellung von Produkten" path="/produkte/gpe"></Titel_Subtitel>     
    <Titel_Subtitel titel="DESIGNER" subtitel="zur Erzeugung grafischen Designs" path="/produkte/designer"></Titel_Subtitel>  
    <Titel_Subtitel titel="NESTING-SOFTWARE" subtitel="zur Steuerung von Lasersystemen" path="/produkte/nestingsoftware"></Titel_Subtitel>
    <Titel_Subtitel titel="UI" subtitel="für Maschinen" path="/produkte/ui"></Titel_Subtitel>
  </div>  <Background></Background>  

  
  </>

  );
}

/* npm run dev */