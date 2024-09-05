
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


//bolasys_client@outlook.de,kZ4xj8vkVABf9WB
export default async function handler({username,email,subject,nachricht,req, res}:UserProps)
{

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
        from: "Tina.Schmidtbauer@bolasys.de",
        to:email,
        subject: subject,
        text: "Von: "+username+"Mit der Nachricht: "+nachricht,
    };


     transporter.sendMail(mailData);
    

    return;
        
}