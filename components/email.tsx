import {Html,Heading,Text} from "@react-email/components";

/*https://dev.to/shahmir049/how-to-send-emails-using-nextjs-14-resend-and-react-email-2b7g*/

export interface UserProps
{
    username: string;
    email: string;
    nachricht: string;
}

const Email = ({username,email,nachricht}: UserProps) =>
{
    return(
    <Html></Html>
    )
}

export default Email;