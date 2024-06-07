import { Card, CardHeader} from "@nextui-org/react";
import { title } from "@/components/primitives";
import Image, { StaticImageData } from "next/image";

export interface UserProps{
    produkt: string;
    bildpfad: StaticImageData;
    bildname: string
}

const Produkt = ({produkt, bildpfad, bildname}: UserProps) =>
    {
        return(
        <Card className="hover:scale-150">
            <CardHeader className="bg-cyan-200 text-center justify-center">{produkt}</CardHeader>
        <Image width={400} height={300} src={bildpfad} alt={bildname}></Image>
        </Card>
        )
    }

export default Produkt;
