export interface UserProps
{
    titel: string;
    subtitel: Array<any>;
}

const Titel_Subtitel_nolink = ({titel, subtitel}: UserProps) =>
{
    return(
        <div style={{marginTop:"-750px"}}>
            <div className="flex justify-center"><h3 style={{fontSize:"26pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></div>
            <div className="flex justify-center"><p style={{fontSize: "14pt",textAlign:"center"}} className="text-white">{subtitel}</p></div>
        </div>
    )
}

export default Titel_Subtitel_nolink;