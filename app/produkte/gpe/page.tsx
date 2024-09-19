"use client"

import Header from "@/components/header";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import { Graph } from "@/components/graph";
import MyCard from "@/components/mycard";


export default function GPE() {

  
    return (
      <>
     <div style={{marginLeft:"50%"}}>
      <Header opacity="100%"></Header>  
      </div>
      
    <div>
    <Titel_Subtitel_nolink titel="GPE" subtitel=""/>  
    </div>

    <Graph></Graph>
    <MyCard></MyCard>

   
      </>
    );
  }
  