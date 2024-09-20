import { Tooltip } from "@nextui-org/tooltip"; 
//versuchen materialUI zu verwenden statt NextUI https://mui.com/material-ui/react-tooltip/

import Image, {StaticImageData } from "next/image";


//trigger="click" funktioniert für Tooltip nicht

export interface UserProps{
    titel: string;
    beschreibung: Array<any>;
    bildpfad: StaticImageData;
    top:string;
    left:string;
}


const DesignerTooltip = ({titel, beschreibung, bildpfad,top,left}: UserProps) => {
    

    return(
        <div style={{marginTop:`${top}`,marginLeft:`${left}`,position:"absolute"}}>
        <Tooltip id="1" className="bg-[#2695a0]" 
        content={
            <div className="px-1 py-2">
                <div className="text-medium font-bold">{titel}</div>
                <div className="text-medium">{beschreibung}</div>
            </div>
        }
        >
        <Image src={bildpfad} alt={titel} width={100} height={100}></Image>
        </Tooltip>
        </div>

    )
    
}

export default DesignerTooltip;