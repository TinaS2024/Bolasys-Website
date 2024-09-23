
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
            host:"smtp-mail.outlook.com",
            service: "Outlook",
            port: 587,
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user:"bolasys_client@outlook.de" ,//process.env.EMAIL_USER,
                pass:"kZ4xj8vkVABf9WB" ,//process.env.EMAIL_PASS,
            }
        } as nodemailer.TransportOptions);


     const mailData = {
         from: "bolasys_client@outlook.de",
         to: "beate.lang@bolasys.de",
         subject: subject,
         html: '<h2>Kundenanfrage an Bolasys GmbH</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };


     transporter.sendMail(mailData);
    
    return NextResponse.json({ username,email,subject,nachricht })        
}