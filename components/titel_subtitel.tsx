
export interface UserProps{
    titel: string;
    subtitel: string;
}

const Titel_Subtitel = ({titel, subtitel}: UserProps) =>
{
    return(
        <div>
            <div className="flex justify-center"><h3 style={{fontSize:"26pt"}} className="text-[#2695a0]">{titel}&nbsp;</h3></div>
            <div className="flex justify-center"><p style={{fontSize: "14pt"}}>{subtitel}</p></div>
        </div>
    )
}

export default Titel_Subtitel;