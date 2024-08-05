"use client"
import React, {useEffect, useRef, useState} from "react";
import * as d3 from "d3";
import { select, Selection, selectAll } from "d3-selection";
import Image from "next/images"


import gpe from "../app/bilder/Bediensoftware_GPE.png";
import phone from "../app/bilder/Telephon.png";
import webstore from "../app/bilder/Webstore.png";
import shop from "../app/bilder/Shop.png";
import maschine from "../app/bilder/Graviermaschine.png";
import email from "../app/bilder/E-mail.png";
import computer from "../app/bilder/Computer_extern.png";
import bildpfad from "../app/bilder/Bediensoftware_GPE.png"

//https://www.react-graph-gallery.com/network-chart

/*
  // Node-Knoten
        var nodes = [
            {id:"GPE",image:gpe},
            {id:"Telefon",image:phone},
            {id:"Webstore",image:webstore},
            {id:"Shop",image:shop},
            {id:"Maschine",image:maschine},
            {id:"E-Mail",image:email},
            {id:"Computer",image:computer},
        ]  
        
        // Link-Knoten
        var links = [
        {source:"GPE", target: "Telefon"},
        {source:"GPE", target: "Webstore"},
        {source:"GPE", target: "Shop"},
        {source:"GPE", target: "Maschine"},
        {source:"GPE", target: "E-Mail"},
        {source:"GPE", target: "Computer"},
        ]  
*/

const data = [
    {
        name: "GPE",
        color: "yellow",
        cx: 200,
        cy:180,
        image: "Bediensoftware_GPE.png"
        
    },
    {
        name: "Telefon",
        color: "blue",
        cx: 200,
        cy:60,
        image:"Telephon.png"
    },
    {
        name: "Webstore",
        color: "blue",
        cx:73,
        cy:54,
        image:"Webstore.png"
    },
    {
        name: "Shop",
        color: "red",
        cx:342,
        cy:63,
        image:"Shop.png"
    },
    {
        name: "Maschine",
        color: "yellow",
        cx:328,
        cy:225,
        image:"Graviermaschine.png"
    },
    {
        name: "E-Mail",
        color: "green",
        cx:54,
        cy:128,
        image:"E-mail.png"
    },
    {
        name: "Computer",
        color: "brown",
        cx:331,
        cy:136,
        image:"Computer_extern.png"
    }
]

const D3 = () =>
{
 
        const svgRef = useRef(null)
        const [selection, setSelection] = useState(null)

    useEffect(()=>
    {   
        if (!selection)
        {
            setSelection(select(svgRef.current));
        }
        else{ 
            
            /*selection
                .selectAll("circle")
                .data(data)
                .enter().append("circle")
                .attr("fill", d=>d.color)
                .attr("r", 25)
                .attr("cx",d=>d.cx)
                .attr("cy",d=>d.cy)*/

            selection
                .selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("x",d=>d.cx)
                .attr("y",d=>d.cy)
                .text(d=>d.name)


            selection
                .selectAll("image")
                .data(data)
                .enter()
                .append("svg:image")
                .attr("src", function(d){
                    return "../bilder/"+ d.image;
                } ) //d=>d.image
                .attr("width",50)
                .attr("height",50)  
                .attr("x",d=>d.cx)
                .attr("y",d=>d.cy)
        }



/*
          // Simuliert Kräfte zwischen den Knoten
        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("center", d3.forceCenter());
        })

        // Erstellt den SVG-Container
        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height",height)
            .attr("background-color","yellow")  */
    
    }, [selection]);
return(
    <div>
        <h2>GPE-Graph</h2>
        <div> <img src="../bilder/Telephon.png" width="50" height="50" x="200" y="60"></img>
           <svg className="bg-white" ref={svgRef} width={400} height={400}>
            
          

           </svg>

        </div>
    </div>

)}

export default D3;
