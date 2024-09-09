
"use server"

import * as nodemailer from "nodemailer";
import { NextRequest} from "next/server";

export interface UserProps
{
    req: NextRequest;
}

export async function POST({req}:UserProps)
{
    if (req.method ==="POST")
    {
           const {username,email,subject,nachricht}  = await req.json();
           
           const transporter = nodemailer.createTransport({
           /* service: "outlook",*/
            host:"smtp-mail.outlook.com",
            port: 587, 
            secureConnection:false,
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false,
                debug:true,
                logger:true,
            },
            auth: {
                user:"bolasys_client@outlook.de" ,
                pass:"kZ4xj8vkVABf9WB" ,
            },             
        } as nodemailer.TransportOptions); 
        
        const mailData = {
        from: "bolasys_client@outlook.de",
        to:"Tina.Schmidtbauer@bolasys.de", //email
        subject: subject,
        text: "Von: "+username+"Mit der Nachricht: "+nachricht,
         };

        try{
            const res = await transporter.sendMail(mailData)
            Response.json({res}, {status:200});
            } catch(error)
            {
                Response.json({error: "Daten konnten nicht geschickt werden!"},{status:500})
            }
    }

        
}