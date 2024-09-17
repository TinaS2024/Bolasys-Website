
import Blog_Artikel from "@/components/blog_artikel";
import Header from "@/components/header";
import image1 from "@/app/bilder/blog/openai.png";
import image2 from "@/app/bilder/blog/w3css_logo.png";
import img_platzhalter from "@/app/bilder/404.png";
import Login from "@/components/login";
import fsPromises from "fs/promises";


/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching */

export interface UserProps
{
  posts: any;
}

export default async function Blogsite({posts}:UserProps) {
  
  const res = await fsPromises.readFile(process.cwd() + "/app/json/blog.json","utf8")
  posts = JSON.parse(res.toString());
  Response.json(posts),{status:200};
/*
const list = [
    {
      titel: "Open Ai, ChatGPT",
      subject: "Künstliche Intelligenz",
      content:"OpenAI ist ein ursprünglich als Non-Profit-Organisation gegründetes und heute auch kommerziell agierendes Unternehmen.\n Es beschäftigt sich mit der Erforschung und Entwicklung von Künstlicher Intelligenz (KI).\n Bekannt wurde OpenAI durch Projekte wie den KI-Bildgenerator DALL-E oder den Chatbot ChatGPT.\n Anfang 2023 wurde bekannt, dass Microsoft eine mehrjährige, milliardenschwere Investition in OpenAI plant.",
      bildpfad: image1,
      date: "01.09.2024"
    },
    {
      titel: "W3.CSS",
      subject: "Web-Programmierung",
      content: "W3.CSS ist ein modernes CSS-Framework mit eingebauter Reaktionsfähigkeit:\n \n • Kleiner und schneller als andere CSS-Frameworks.\n • Einfacher zu erlernen und einfacher zu verwenden als andere CSS-Frameworks. \n • Verwendet nur Standard-CSS (keine jQuery- oder JavaScript-Bibliothek).\n • Beschleunigt und vereinfacht die Webentwicklung.\n • Unterstützt standardmäßig modernes responsives Design (mobile first). \n • Sorgt für CSS-Gleichheit in allen Browsern. Chrome, Firefox, IE, Safari, und mehr. \n • Bietet CSS-Gleichheit für alle Geräte. PC, Laptop, Tablet und Handy:Geben Sie auf der linken Seite etwas Markdown ein. Sehen Sie HTML auf der rechten Seite",
      bildpfad: image2,
      date: "30.08.2024"
    },
  ]

  {list.map((item) => (
    item.content.split("\n")
  ))}*/
  
  return (  

<>
<div style={{marginLeft:"50%",marginTop:"-150px"}}>   
<Header opacity="100%" titel="Bolasys Blog"></Header>
</div>
{/*
{list.map((item, index) => (
  <Blog_Artikel className="line" key={index} titel={item.titel} subject={item.subject} bildpfad={item.bildpfad} content={item.content} date={item.date}></Blog_Artikel>
))}
*/}

{
posts.artikellist.map((post:any) =>
(
  <Blog_Artikel key={post.id} className="line" titel={post.titel} subject={post.subtitel} bildpfad={img_platzhalter} content={post.inhalt} date={post.datum}/>
))
}

 
<Login className="abstand_unten_klein"/>
   </>

  );
}

