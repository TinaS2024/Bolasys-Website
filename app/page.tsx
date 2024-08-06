"use client"
import { Background } from "@/components/background";
import Titel_Subtitel from "@/components/titel_subtitel";


export default function Home() 
{
  return (
    <>

  <div className="flex flex-row sm:flex-col md:flex-row absolute abstand_oben">  
    <Titel_Subtitel titel="GPE" subtitel="zur Herstellung von Produkten"></Titel_Subtitel>     
    <Titel_Subtitel titel="DESIGNER" subtitel="zur Erzeugung grafischen Designs"></Titel_Subtitel>  
    <Titel_Subtitel titel="NESTING" subtitel="zur Steuerung von Lasersystemen"></Titel_Subtitel>
    <Titel_Subtitel titel="UI" subtitel="für Maschinen"></Titel_Subtitel>
  </div>  <Background/>  

  
  </>

  );
}

/* npm run dev */