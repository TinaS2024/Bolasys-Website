import { NextRequest } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

export async function POST(req : Request)
//export default async function POST(req:NextRequest) 
{
    const {artikel} = await req.json()
    console.log("artikel", JSON.stringify(artikel))
    //if (req.method ==="POST")
    {
        const dataFilePath = path.join(process.cwd()+"/app/json/blog.json");
        console.log("dataFilePath", dataFilePath)
        //const dataFilePath = "../../json/blog.json";
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData.toString());
    
        //const {titel,subtitel,inhalt,datum} = await req.json();

/*         const newData = {
            artikellist: [{  
                        
            titel:titel,
            subtitel: subtitel,
            inhalt: inhalt,
            datum: datum,
            }]
            };
        objectData.push(newData);
 */       
        objectData.artikellist.push(artikel);
        const updatedData = JSON.stringify(objectData, null, 2);

        await fsPromises.writeFile(dataFilePath,updatedData);

        //return Response.json({ titel,subtitel,inhalt,datum})   
        return Response.json(artikel)   
        }
        
    
    }  

