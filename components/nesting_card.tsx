import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

;export interface UserProps
{
    titel:string;
    path:StaticImageData;
    beschreibung: string;
    className: string;
    width: number;
    height: number;
    pathstemp:StaticImageData;
}

const NestingCard = ({titel,path,beschreibung,className,width,height,pathstemp}:UserProps) =>
{

    return(
        <Card className={className}>
            <CardHeader style={{zIndex: "0"}}><h3 className="text-[#2695a0] text-xl">{titel}</h3></CardHeader>
            <Divider/>
            <Image src={pathstemp} width={300} height={300} alt=""/>
            <Divider/>
           
            <Image style={{marginTop:"10%",marginBottom: "10%"}} src={path} width={width} height={height} alt={titel}/>
            <CardBody className="bg-[#5ec4d2]/30">{beschreibung}</CardBody>
        </Card>
    )
}

export default NestingCard;