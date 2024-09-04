import { Cipher } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";


//bolasys_client@outlook.de,kZ4xj8vkVABf9WB
export default async function handler(req:NextApiRequest, res:NextApiResponse, )
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

    const { username,email, subject, nachricht} = req.body;

    if (!nachricht || !username || !nachricht)
    {
        return res
            .status(400)
            .json({message: "Bitte fülle die fehlenden Felder aus!"})
    }

    const mailData = {
        from: email,
        to:"Tina.Schmidtbauer@bolasys.de",
        subject: subject,
        text: "Von: "+username+"Mit der Nachricht: "+nachricht,
    };


     transporter.sendMail(mailData);

    return;
        
}