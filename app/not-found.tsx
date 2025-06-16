"use client"
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";

const Custom404 = () =>
{

    return(
   
        <div style={{marginLeft:"50%"}}>
        <HeaderNeu></HeaderNeu>  
        <Background top="-350px" left="0px" opacity="10%"></Background>

            <div className="gif flex justify-center"> 
            <h3 style={{fontSize:"26pt",marginTop:"25%"}} className="text-[#5ec4d2]">Seite wurde nicht gefunden !</h3>
            </div>
         
            </div>
    )
}

export default Custom404;