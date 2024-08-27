import {Html,Heading,Text} from "@react-email/components";

/*https://dev.to/shahmir049/how-to-send-emails-using-nextjs-14-resend-and-react-email-2b7g*/

export interface UserProps
{
    username: string;
    email: string;
    thema: string;
    nachricht: string;
}

const Email = ({username,email,thema,nachricht}: UserProps) =>
{
    return(
    <Html lang="de">
        <Heading as="h1">Neue Form-Eingabe</Heading>
        <Text>Du hast uns eine Nachricht gesendet. Hier sind die Details nochmal aufgeführt.</Text>
        <Text>Name: {username}</Text>
        <Text>E-Mail: {email}</Text>
        <Text>Thema: {thema}</Text>
        <Text>Nachricht: {nachricht}</Text>
    </Html>
    )
}

export default Email;