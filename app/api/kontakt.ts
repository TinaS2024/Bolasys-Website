import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export interface TransportOptions
{
    host: string | undefined;
    port: number | undefined;
    service: string | undefined;
    auth: object | string | undefined;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse, )
{
    if(req.method ==="POST")
    {
        const { username,email, subject, nachricht} = req.body;
        console.log("Data", req.body)
       

        let transporter = nodemailer.createTransport({
            host: "",
            service: "smtp",
            port: "",
            debug:true,
            auth: {
                user:"" ,//process.env.EMAIL_USER,
                pass:"" ,//process.env.EMAIL_PASS,
            }
        } as nodemailer.TransportOptions);

        try{
            let info: unknown = await transporter.sendMail({
                from:"" ,//process.env.EMAIL_USER,
                to: email, 
                subject: subject, 
                text:"Von: "+username+"Mit der Nachricht: "+nachricht, 
            });
            console.log("Nachricht gesendet: %s")
             res.status(200).json({success: true});
        } catch(error: any)
        {
            console.error("Fehlerhafte E-Mail-Sendung:", error)
            res.status(500).json({success: false, error: error.message })
        }
        
    } else{
        res.status(405).json({message: "Methode nicht erlaubt"});
    }
  
}