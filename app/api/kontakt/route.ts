
import { NextRequest,NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from 'next'

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

 
type ResponseData = {
  message: string
}
 
export async function POST(
  req : Request
)
//export default async function handler({username,email,subject,nachricht,req, res}:UserProps)
{
    const {username,email,subject,nachricht} = await req.json()
    console.log("send mail")
    console.log({username,email,subject,nachricht})
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
         to:email,
         subject: subject,
         text: "Von: "+username+"Mit der Nachricht: "+nachricht,
     };


     transporter.sendMail(mailData);
    
    return Response.json({ username,email,subject,nachricht })        
}