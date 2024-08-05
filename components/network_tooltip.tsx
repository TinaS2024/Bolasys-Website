import { Tooltip } from "@nextui-org/react";
import Image, {StaticImageData } from "next/image";
//trigger="click" funktioniert für Tooltip nicht

export interface UserProps{
    titel: string;
    beschreibung: string;
    bildpfad: StaticImageData;
}


const NetworkTooltip = ({titel, beschreibung, bildpfad}: UserProps) => {

    function showTooltip()
    {
      //
    }


    return(
        <Tooltip className="bg-[#2695a0]"
        content={
            <div className="px-1 py-2">
                <div className="text-medium font-bold">{titel}</div>
                <div className="text-medium">{beschreibung}</div>
            </div>
        }
        >
        <Image onClick={showTooltip} src={bildpfad} alt={titel} width={100} height={100}></Image>
        </Tooltip>

    )
    
}

export default NetworkTooltip;