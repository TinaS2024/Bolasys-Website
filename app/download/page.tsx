import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import Download_Button from "@/components/download_button";

const DownloadPage = () =>{

  const text = [""];


  return (
    <div>
      <HeaderNeu></HeaderNeu>  
      <Background top="-350px" left="0px" opacity="10%"></Background>
      <div>
      <Titel_Subtitel_nolink titel="Downloads" subtitel={text}/>  
      <Download_Button text="Flyer" quelle="/Bolasys_Flyer.pdf"/>
      </div>
   
       
        </div>
  );
}

export default DownloadPage;
