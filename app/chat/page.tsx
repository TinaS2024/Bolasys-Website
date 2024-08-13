import Header from "@/components/header";
import { useChat } from "ai/react";
import { Textarea } from "@nextui-org/input";

/* Chat-Tutorial: https://www.youtube.com/watch?v=sHuIIX79MOs */

export interface UserProps
{
      input: any;
      handleInputChange: any;
      handleSubmit:any;
}

const ChatPage = ({input, handleInputChange,handleSubmit}:UserProps) => {
  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Chat" opacity="100%"/>
        <div style={{marginLeft:"-100%",width:"400px"}} className="container h-full w-full flex flex-col py-8">
        <div className="flex-1 overflow-y-auto"></div>
        <form onSubmit={handleSubmit} className="mt-auto relative">
          <Textarea className="w-full text-lg" placeholder="Frage mich etwas!" value={input} onChange={handleInputChange}/>
        </form>
        </div>
        
   
    </div>
  );
}

export default ChatPage;
