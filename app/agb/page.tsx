
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";



export default function AGB() {

  const text = [""];

  return (  
<>
<div style={{marginLeft:"50%"}}>
      <HeaderNeu></HeaderNeu>  
      <Background left="-250px" opacity="10%"></Background>
      </div>
<div>
    <Titel_Subtitel_nolink titel="AGB" subtitel={text}/>  
    </div>
<ul style={{fontSize:"14pt"}}>
 
  <li style={{fontSize:"20pt"}}>Bolasy GmbH</li>
  <li>Herstellung, Installation und Wartung von Software- und Hardwaresystemen</li>
  <li><br/></li>
  <li>Amtsgericht: Chemnitz HRB 31641 </li>
  <li>Fritz-Wagner-Siedlung 16, D-09116 Chemnitz</li>
</ul>
   
    </>

  );
}
