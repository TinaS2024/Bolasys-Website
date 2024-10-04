"use client"

import HeaderNeu from "@/components/header_new";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import { Graph } from "@/components/graph";
import MyCard from "@/components/mycard";
import { Background } from "@/components/background";


export default function GPE() {

  const text =["Graphical Product Environment."]

  
    return (
      <> 
     <div style={{marginLeft:"50%"}}>
      <HeaderNeu></HeaderNeu>  
      <Background opacity="20%"></Background>
      </div>
      
    <div>
    <Titel_Subtitel_nolink titel="GPE" subtitel={text}/>  
    </div>
     
    <Graph></Graph>
    <MyCard></MyCard>

   
      </>
    );
  }
  