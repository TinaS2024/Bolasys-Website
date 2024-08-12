"use client"
import React from "react";
import  { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem} from "@nextui-org/react";

import myLogo from "../app/bilder/logo.png";
import Image from "next/image";
import myIcon from "../app/bilder/expand_icon.png";

const NewNavbar = () =>
{
    const icon = {
        chevron: <Image src={myIcon} width={25} height={25} alt=""/>
    }
     {/*endContent={icon.chevron}*/}
    return(
        <Navbar isBordered maxWidth="full">
            <NavbarContent justify="start">

            <NavbarBrand className="mr-50">
                <Image src={myLogo} width={20} height={20} alt="logo"/>
                <p className="font-bold text-inherit">BOLASYS GMBH</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex" justify="center">

                <NavbarItem>
                    <Link color="foreground" className="text-lg" href="/">Home</Link>
                </NavbarItem>

                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button 
                            disableRipple 
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg"
                           
                            radius="sm"
                            variant="light">
                                Produkte 
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu aria-label="Bolays Produkte" className="w-[250px] p-5" itemClasses={{base: "gap-4"}} variant="faded">

                        <DropdownItem key="gpe">
                        <Link color="foreground" className="text-lg" href="/produkte/gpe">GPE</Link>
                        </DropdownItem>

                        <DropdownItem key="designer">
                        <Link color="foreground" className="text-lg" href="/produkte/designer">Designer</Link>
                        </DropdownItem>

                        <DropdownItem key="nestingsoftware">
                        <Link color="foreground" className="text-lg" href="/produkte/nestingsoftware">Nesting-Software</Link>
                        </DropdownItem>

                        <DropdownItem key="ui">
                        <Link color="foreground" className="text-lg"href="/produkte/ui">UI</Link>
                        </DropdownItem>


                    </DropdownMenu>
                </Dropdown>

                <NavbarItem>
                    <Link color="foreground" className="text-lg"href="/chat">Chat</Link>
                </NavbarItem>
                

            </NavbarContent>


            </NavbarContent>

        </Navbar>

    )
}

export default NewNavbar;