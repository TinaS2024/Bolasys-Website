import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

export interface UserProps
{
    titel:string;
    path:StaticImageData;
    beschreibung: string;
    className: string;
}

const NestingCard = ({titel,path,beschreibung,className}:UserProps) =>
{

    return(
        <Card className={className}>
            <CardHeader style={{zIndex: "0"}}><h3 className="text-[#2695a0] text-xl">{titel}</h3></CardHeader>
            <Divider/>
            <Image style={{marginTop:"10%",marginBottom: "10%"}} src={path} width={100} height={100} alt={titel}></Image>
            <CardBody className="bg-[#5ec4d2]/30">{beschreibung}</CardBody>
        </Card>
    )
}

export default NestingCard;