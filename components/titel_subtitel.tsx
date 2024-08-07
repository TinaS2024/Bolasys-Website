
export interface UserProps{
    titel: string;
    subtitel: string;
}

const Titel_Subtitel = ({titel, subtitel}: UserProps) =>
{
    return(
        <div style={{margin:"25px",left:"50px"}}>
            <div className="flex justify-center"><h3 style={{fontSize:"26pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></div>
            <div className="flex justify-center"><p style={{fontSize: "14pt"}} className="text-white">{subtitel}</p></div>
        </div>
    )
}

export default Titel_Subtitel;