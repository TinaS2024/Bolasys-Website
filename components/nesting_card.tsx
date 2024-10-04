import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

;export interface UserProps
{
    titel:string;
    path:StaticImageData;
    beschreibung: Array<any>;
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
            <CardBody>
            <Divider/>
            <div className="zentrieren"><Image src={pathstemp} width={300} height={300} alt=""/></div>
            <Divider/>
            <div className="zentrieren"><Image style={{marginTop:"5%",marginBottom: "2%"}} src={path} width={width} height={height} alt={titel}/></div>
            </CardBody>
            <CardFooter className="bg-[#5ec4d2]/30">{beschreibung}</CardFooter>
        </Card>
    )
}

export default NestingCard;