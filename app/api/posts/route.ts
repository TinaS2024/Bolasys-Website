import { NextRequest } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "/app/json/blog.json", "utf8");

export default async function POST(req:NextRequest) 
{
    
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());
 
    const {titel,subtitel,inhalt,datum} = await req.json();

    const newData = {
        artikellist: [{  
                    
        titel:titel,
        subtitel: subtitel,
        inhalt: inhalt,
        datum: datum,
        }]
        };
     objectData.push(newData);

    const updatedData = JSON.stringify(objectData);

    await fsPromises.writeFile(dataFilePath,updatedData);
    console.log(newData)

    return Response.json({ titel,subtitel,inhalt,datum})  
    }  

