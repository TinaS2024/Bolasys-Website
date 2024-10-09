export interface UserProps
{
    text:Array<any>;
}


const Punkt = ({text}: UserProps) =>
{

    return(
        <div>
            <div className="punkt-container"></div> 
            <div><p style={{textAlign:"left"}}>{text}</p><br /></div>
     </div>
    )
}

export default Punkt;