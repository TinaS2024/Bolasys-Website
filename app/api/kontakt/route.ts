
import { NextRequest,NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
export interface UserProps
{
    username:string;
    email: string;
    subject:string;
    nachricht:string;
    req: NextRequest;
    res: NextResponse;
}
 
const host = process.env.NEXT_PUBLIC_MAIL_HOST;
const port = process.env.NEXT_PUBLIC_MAIL_PORT;
const user = process.env.NEXT_PUBLIC_MAIL_USER;
const passwort = process.env.NEXT_PUBLIC_MAIL_PASSWORD;
const webmail = process.env.NEXT_PUBLIC_MAIL_WEBSITE;

export async function POST(req : Request)
{
    const {username,email,subject,nachricht} = await req.json()

    const transporter = nodemailer.createTransport({
            host: host, 
            service: "Strato", 
            port: port, 
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user: user, 
                pass: passwort 
            }
        } as nodemailer.TransportOptions);


     const mailData = {
         from: user, 
         to: webmail,
         subject: subject,
         html: '<h2>Kundenanfrage an Bolasys GmbH</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };


     transporter.sendMail(mailData);
    
    return NextResponse.json({ username,email,subject,nachricht })        
}