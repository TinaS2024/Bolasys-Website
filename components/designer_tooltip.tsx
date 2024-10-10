import { Tooltip } from "@nextui-org/tooltip";
import Image, {StaticImageData } from "next/image";

export interface UserProps{
    titel: string;
    beschreibung: Array<any>;
    bildpfad: StaticImageData;
    top:string;
    left:string;
}


const DesignerTooltip = ({titel, beschreibung, bildpfad,top,left}: UserProps) => {
    

    return(
        <div className="sm:size-10 md:size-16" style={{marginTop:`${top}`,marginLeft:`${left}`,position:"absolute",zIndex:"5"}}>
        <Tooltip id="1" className="bg-[#0e2d38]" 
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