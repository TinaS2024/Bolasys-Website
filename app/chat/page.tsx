import Header from "@/components/header";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";



const ChatPage = ()=>{

  return (
    <div style={{marginLeft:"50%"}}>
        <Header titel="Chat" opacity="100%"/>
        <div style={{marginLeft:"-100%",width:"400px"}} className="container h-full w-full flex flex-col py-8">
        <form>
        <table className="tab">
        <tr><td colSpan={2}><Textarea
          label="Bolasys Chat"
          placeholder="Fragen Sie uns etwas !"
          className="max-w-xs"
          labelPlacement="outside"
          variant="faded"
          /></td><td></td></tr>
        <tr><td></td><td><Button className="bg-[#5ec4d2] text-black mt-2">Absenden</Button></td></tr>
        </table>
          
        </form>
        </div>
      
        </div>
  );
}

export default ChatPage;
