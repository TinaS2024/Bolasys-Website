
export interface UserProps{
    titel: string;
    inhalt: string
}

const TabZeile = ({titel, inhalt}: UserProps) =>
    {
        return(
            <tr><th>{titel}</th><td>{inhalt}</td></tr>
        )
    }

export default TabZeile;