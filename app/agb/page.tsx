
import Header from "@/components/header";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";



export default function AGB() {
  return (  
<>
<div style={{marginLeft:"50%"}}>   
<Header opacity="100%"></Header>
</div >
<div>
    <Titel_Subtitel_nolink titel="AGB" subtitel=""/>  
    </div>
<ul>
 
  <li>Vertragsgegendstand</li>
  <li>Vertragsschluss</li>
  <li>Preise & Zahlungsbedingungen</li>
  <li>Wartungskosten</li>
  <li>Gewährleistung & Haftung</li>
  <li>Widerrufsrecht</li>
  <li>Datenschutz</li>
</ul>
   
    </>

  );
}
