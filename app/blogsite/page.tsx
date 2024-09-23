
import Blog_Artikel from "@/components/blog_artikel";
import Header from "@/components/header";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import Login from "@/components/login";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";


export default async function generateStaticParams() {
  
  const res = await fsPromises.readFile(process.cwd() + "/app/json/blog.json","utf8")
  const posts = JSON.parse(res.toString());
  NextResponse.json(posts),{status:200};

  return (  

<>
<div style={{marginLeft:"50%"}}>   
<Header opacity="100%"></Header>
</div>
<div>
 <Titel_Subtitel_nolink titel=" Bolasys Blog" subtitel=""/>  
  </div>

{
  //toReversed
posts.artikellist.map((post:any) =>
(
  <Blog_Artikel key={post.id} className="line" titel={post.titel} subject={post.subtitel} bildpfad={require("/public/blog/"+post.bildpfad)} content={post.inhalt} date={post.datum}/>
))
}

 
<Login className="abstand_unten_klein"/>
   </>

  );
}

