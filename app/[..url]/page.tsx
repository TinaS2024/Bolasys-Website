import { ragChat } from "@/lib/rag-chat"

export interface UserProps
{
  params: {  
    url: string | string[] | undefined
  }

}

const Page = ({params}: UserProps) =>
{
    console.log(params)
    //await ragChat.context.add({
    //    type: "htmk",
    //    source:
    //})
    
    return(
        <p>Hallo</p>

    )

}

export default Page;