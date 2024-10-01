
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
 
export async function POST(req : Request)
{
    const {username,email,subject,nachricht} = await req.json()

    const transporter = nodemailer.createTransport({
            host: "smtp.strato.de", //"smtp-mail.outlook.com",
            service: "Strato", //"Outlook",
            port: 465, //587,
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user: "info@bolasys.de", //"bolasys_client@outlook.de" 
                pass: "42sysalob-WS" //"kZ4xj8vkVABf9WB" 
            }
        } as nodemailer.TransportOptions);


     const mailData = {
         from: "info@bolasys.de", //"bolasys_client@outlook.de",
         to: "tina.Schmidtbauer@bolasys.de",
         subject: subject,
         html: '<h2>Kundenanfrage an Bolasys GmbH</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };


     transporter.sendMail(mailData);
    
    return NextResponse.json({ username,email,subject,nachricht })        
}