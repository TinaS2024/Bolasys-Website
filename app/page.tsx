"use client"
import { Graph } from "@/components/graph";
import Titel_Subtitel from "@/components/titel_subtitel";


export default function Home() 
{

  return (
<div className="flex  sm:flex-col md:flex-row lg:flex-row xl:flex-row">   
  <div className="abstand_unten">  
    <Titel_Subtitel titel="GPE" subtitel="zur Herstellung von Produkten."></Titel_Subtitel>     
    <Titel_Subtitel titel="SOFTWARE" subtitel="zur Steuerung von Lasersystemen."></Titel_Subtitel>
    <Titel_Subtitel titel="DESIGNER" subtitel="zur Erzeugung grafischen Designs."></Titel_Subtitel>
  </div>

  <div className="abstand_unten">
  <Graph></Graph>
  </div>
</div>


  );
}

/* npm run dev */