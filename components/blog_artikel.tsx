"use client"

import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";

export interface UserProps
{
    titel: string;
    subject: string;
    content: string;
    bildpfad: string;
    className: string;
    date: string;
}


const Blog_Artikel = ({titel,subject,content,bildpfad,className,date}:UserProps) =>
{

    return(<div className={className}>
        <Card className="min-w-[450px] py-50 klein_abstand_unten">
            <CardHeader style={{zIndex: "0"}}>
            <div style={{margin:"25px",left:"50px"}}>
           <Image className="absolute right-0 top-0 rounded" src={bildpfad} alt={titel} height={150} width={150}/>
           <div className="flex justify-center text-[#5ec4d2]"><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></div>
            <div className="flex justify-center"><p style={{fontSize: "14pt",textAlign:"center"}} className="text-white">{subject}</p></div>
        </div>
            </CardHeader> 
            <Divider/> 
            <CardBody className="bg-white/80 text-black">{content}</CardBody>
            <Divider/>
            <CardFooter className="bg-[#5ec4d2]/40"><p>Veröffentlicht am:&nbsp;{date}</p></CardFooter>
        </Card>
</div>
    )
}

export default Blog_Artikel;