"use server"
import {Resend} from "resend";
import Email from "./components/email";


 interface State
{
    error: string | null;
    success: boolean;
}
  
export const sendEmail = async (prevState: State, formData: FormData) => {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const thema = formData.get("thema") as string
    const nachricht = formData.get("nachricht") as string
 
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Tina Schmidtbauer <Tina.Schmidtbauer@bolasys.de>",
        to: email,
        subject: thema,
        react: Email({username,email,thema,nachricht})
      })
      return {
        error: null,
        success: true
      }
    } catch (error) {
      console.log(error)
      return {
        error: (error as Error).message,
        success: false
      }
    }
  }
