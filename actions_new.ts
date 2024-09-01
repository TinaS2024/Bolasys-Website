"use server"
import nodemailer from "nodemailer";

interface State
{
    error: string | null;
    success: boolean;
}
const transporter = nodemailer.createTransport({
      service: "GMX",
      auth: {
        user: "t.schmidtbauer@gmx.de",
        pass: "D04M08K19U97B"
      },
  });

export async function sendOfflineMail(prevState: State,res:any, formData: FormData)
{
  const username = formData.get("username") as string
  const email = formData.get("email") as string
  const thema = formData.get("thema") as string
  const nachricht = formData.get("nachricht") as string

    try {
      res.status(200).json({success: true});
    }catch (error){
      res.status(500).json({success: false, error: (error as Error).message});
    }
      const info = await transporter.sendMail({
        from: email,
        to: "t.schmidtbauer@gmx.de",
        subject: thema,
        text: "Von: "+username + "Nachricht: "+ nachricht
      });

    return info;

  }
