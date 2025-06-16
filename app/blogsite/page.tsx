
import Blog_Artikel from "@/components/blog_artikel";
import HeaderNeu from "@/components/header_new";
import { Background } from "@/components/background";
import Titel_Subtitel_nolink from "@/components/titel_subtitel_nolink";
import Login from "@/components/login";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";


export default async function generateStaticParams() {

  const text = [""];
  
  const res = await fsPromises.readFile(process.cwd() + "/app/json/blog.json","utf8");
  const posts = JSON.parse(res.toString());
  NextResponse.json(posts),{status:200};

  return (  

<>
<div>
      <HeaderNeu></HeaderNeu>  
      <Background top="-350px" left="0px" opacity="10%"></Background>
      </div>
<div>
 <Titel_Subtitel_nolink titel="Bolasys Blog" subtitel={text}/>  
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

