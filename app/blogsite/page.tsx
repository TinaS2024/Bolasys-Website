
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

  return (  

<>
<div style={{marginLeft:"50%",marginTop:"-150px"}}>   
<Header opacity="100%" titel="Bolasys Blog"></Header>
</div>

{
  //toReversed
posts.artikellist.map((post:any) =>
(
  <Blog_Artikel key={post.id} className="line" titel={post.titel} subject={post.subtitel} bildpfad={img_platzhalter} content={post.inhalt} date={post.datum}/>
))
}

 
<Login className="abstand_unten_klein"/>
   </>

  );
}

