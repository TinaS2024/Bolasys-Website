import fsPromises from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req : Request)
{
    const {artikel} = await req.json();
    console.log("artikel", JSON.stringify(artikel));

    const dataFilePath = path.join(process.cwd()+"/app/json/blog.json");
    console.log("dataFilePath", dataFilePath);
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());  
    objectData.artikellist.push(artikel);
    const updatedData = JSON.stringify(objectData, null, 2);

    await fsPromises.writeFile(dataFilePath,updatedData);
 
    return NextResponse.json(artikel);
}
        
    
    

