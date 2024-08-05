
export interface UserProps{
    titel: string;
    inhalt: string
}

const TabZeile = ({titel, inhalt}: UserProps) =>
    {
        return(
            <tr><th style={{paddingRight:"50px"}}>{titel}</th><td>{inhalt}</td></tr>
        )
    }

export default TabZeile;