import { NextRequest } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "../posts/json/blog.json");

export default async function handlerT(req:NextRequest) 
{
    if (req.method === "GET")
    {
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData.toString());
        Response.json(objectData),{status:200};
    }
    else if (req.method === "POST")
    {
    try
        {
            const jsonData = await fsPromises.readFile(dataFilePath);
            const objectData = JSON.parse(jsonData.toString());

            const {titel,subtitel,inhalt,datum} = await req.json()

            const newData = {
                titel,
                subtitel,
                inhalt,
                datum
            };
            objectData.push(newData);

            const updatedData = JSON.stringify(objectData);

            await fsPromises.writeFile(dataFilePath,updatedData);

            Response.json({message: "Daten wurden erfolgreich gespeichert!"},{status:200});
        } catch(error)
        {
            console.log(error);
            Response.json({message: "Fehler beim speichern der Daten!"},{status:500});
        }
    }  

}