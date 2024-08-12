"use client"
import Header from "@/components/header";

import { Canvas} from "@react-three/fiber";
//import BoxApp from "@/components/boxapp";


const Custom404 = () =>
{

    return(
   
            <div style={{marginLeft:"50%"}}>    
       
            <Header titel="Page not Found" opacity="100%"/>
            <div className="gif flex justify-center"> 
            <h3 style={{fontSize:"26pt",marginTop:"25%"}} className="text-[#5ec4d2]">Sie haben den leeren Weltraum gefunden !</h3>
            </div>
           
            
            {/* 
            <Canvas style={{marginLeft: "-50%"}} className="h-2xl w-2xl">
            <BoxApp x={4} y={4} z={4} color="orange"></BoxApp>    
            </Canvas>*/}
         
            </div>
    )
}

export default Custom404;