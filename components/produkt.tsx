import { Card, CardHeader} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

export interface UserProps{
    produkt: string;
    bildpfad: StaticImageData;
    bildname: string;
}

const Produkt = ({produkt, bildpfad, bildname}: UserProps) =>
    {
        return(
            <div className="m-[10px]">
        <Card className="hover:scale-110 min-w-[400px] anordnung">
            <CardHeader className="bg-[#2695a0] text-center justify-center">{produkt}</CardHeader>
        <Image width={400} height={300} src={bildpfad} alt={bildname}></Image>
        </Card>
        </div>
        )
    }

export default Produkt;
