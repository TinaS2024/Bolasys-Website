
"use client"
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import gpe from "../app/bilder/Bediensoftware_GPE.png";
import Link from "next/link";
import {Input} from "@nextui-org/react";
import Registration from "../components/registration";

import {supabase} from "@/src/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* https://www.youtube.com/watch?v=bicCg4GxOP8 */

export interface UserProps
{
    titel: string;
    inhalt: string;
    className: string;
}

const Login = ({titel,inhalt,className}:UserProps) =>
{
    const {isOpen,onOpen,onOpenChange} = useDisclosure();
    const bild0 = gpe;

    const [data, setData] = useState<{
        email: string,
        password: string,
    }>({
        email: "",
        password: ""
    })

    const router = useRouter();

    const login = async () =>
    {
        try {
            let {data: dataUser, error } = await supabase
            .auth 
            .signInWithPassword({
                email: data.email,              /* tina.schmidtbauer@bolasys.de*/
                password: data.password         /* F)mP7$f,k2B)#*L */
            })

        if (dataUser)
        {
            console.log(dataUser)
            router.push("/kontakt");
            router.refresh();
        }

        } catch (error)
        {
            console.log(error)
            console.log("Falsche Email oder falsches Passwort")
        }
    }

    const handleChange = (e: any) =>
    {
        const {name, value} = e.target;
        setData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    return(
        <div className={className}>
        <Button style={{color:"white",backgroundColor:"#0e2d38"}} onPress={onOpen}><p className="text-lg">Login</p></Button>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{base: "border-[#5ec4d2] bg-[#0e2d38] text-[#5ec4d2] px-10 gap-4 "}}>
            
            <ModalContent>
                {(onClose:any) => (
                    <>
                    <ModalHeader><h3 style={{fontSize:"20pt"}} className="text-[#5ec4d2]">{titel}&nbsp;</h3></ModalHeader>
                    <ModalBody><p style={{fontSize: "14pt"}} className="text-white">{inhalt}</p></ModalBody>
                    <Input isRequired type="text" label="E-Mail" name="email" value={data?.email} onChange={handleChange} className="max-w-xs" variant="bordered"/>
                    <Input isRequired type="password" label="Password" name="password" value={data?.password} onChange={handleChange} className="max-w-xs" variant="bordered"/>
                    <Registration className="" titel="Registration" inhalt="Bitte registrieren Sie sich."/>
                 <ModalFooter><Button className="bg-[#5ec4d2] text-black" href="#" as={Link} onClick={login} onPress={onClose}>Login</Button></ModalFooter>
                    </>      
                  )}
            </ModalContent>  
        </Modal>
        </div>
       
    )
}

export default Login;