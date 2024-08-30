
import Blog_Artikel from "@/components/blog_artikel";
import Header from "@/components/header";
import image1 from "@/app/bilder/blog/openai.png";
import image2 from "@/app/bilder/blog/w3css_logo.png";

import { promises as fs } from 'fs';

export default async function BlogSite() {

  {/*  const resfile = await fs.readFile(process.cwd() + "@/app/json/blog.json", 'utf8');
  const data = JSON.parse(resfile);
 */}


const list = [
    {
      titel: "Open Ai, ChatGPT",
      subject: "Künstliche Intelligenz",
      content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      bildpfad: image1
    },
    {
      titel: "W3.CSS",
      subject: "Web-Programmierung",
      content: "W3.CSS ist ein modernes CSS-Framework mit eingebauter Reaktionsfähigkeit: Kleiner und schneller als andere CSS-Frameworks.Einfacher zu erlernen und einfacher zu verwenden als andere CSS-Frameworks.Verwendet nur Standard-CSS (keine jQuery- oder JavaScript-Bibliothek).Beschleunigt und vereinfacht die Webentwicklung.Unterstützt standardmäßig modernes responsives Design (mobile first).Sorgt für CSS-Gleichheit in allen Browsern. Chrome, Firefox, IE, Safari, und mehr.Bietet CSS-Gleichheit für alle Geräte. PC, Laptop, Tablet und Handy:Geben Sie auf der linken Seite etwas Markdown ein.Sehen Sie HTML auf der rechten Seite",
      bildpfad: image2
    },

  ]
  return (  
<>
<div style={{marginLeft:"50%"}}>   
<Header opacity="100%" titel="Bolasys Blog"></Header>
</div >
{list.map((item, index) => (
  <Blog_Artikel key={index} titel={item.titel} subject={item.subject} bildpfad={item.bildpfad} content={item.content}></Blog_Artikel>
))}
{/*<Blog_Artikel titel={data.titel} subject={data.subject} bildpfad={data.bildpfad} content={data.content}></Blog_Artikel> */}

   </>

  );
}
