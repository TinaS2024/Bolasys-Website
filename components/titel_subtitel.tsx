
import Link from "next/link";

export interface UserProps{
    titel: string;
    subtitel: string;
    path: string;
}

const Titel_Subtitel = ({titel, subtitel,path}: UserProps) =>
{
    return(
        <div style={{marginRight:"50px",left:"50px"}}>
            <div className="flex justify-center"><Link href={path}><h3 style={{fontSize:"26pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></Link></div>
            <div className="flex justify-center"><p style={{fontSize: "14pt",textAlign:"center"}} className="text-white">{subtitel}</p></div>
        </div>
    )
}

export default Titel_Subtitel;