"use client"
import React from "react";
import  { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, DropdownSection} from "@nextui-org/react";

import myLogo from "@/public/logo.png";
import Image from "next/image";
import myIcon from "@/public/expand_icon.png";

const NewNavbar = () =>
{
    const icon = {
        chevron: <Image src={myIcon} width={25} height={25} alt=""/>
    }
     {/*endContent={icon.chevron}*/}
    return(
        <div className="fixed top-0 left-0 right-0 w-full" style={{zIndex:"10",width:"100%"}}>
            <hr className="new1"/>
        <Navbar maxWidth="full"  style={{opacity:"100%"}} classNames={{base: "bg-blue"}}>
            <NavbarContent justify="start">

            <NavbarBrand className="mr-0 sm:mr-4">
                <Image src={myLogo} width={20} height={20} alt="logo"/>
                <Link color="foreground" className="text-lg" href="/"> <p className="font-bold text-xl text-inherit">BOLASYS GMBH &nbsp; </p></Link>    
                </NavbarBrand>

            </NavbarContent>
              
        

            <NavbarContent className="hidden sm:flex " justify="center">

            <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/produkte/gpe">GPE</Link>
            </NavbarItem>

            <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/produkte/designer">DESIGNER</Link>
            </NavbarItem>

            <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/produkte/nestingsoftware">NESTING</Link>
            </NavbarItem>

            <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/produkte/ui">UI</Link>
            </NavbarItem>
            </NavbarContent>


                
                <Dropdown >
                    <NavbarItem className="lg:hidden md:hidden sm:block">
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

                    <DropdownMenu aria-label="Bolays Produkte" className="w-[250px] p-5 lg:hidden md:hidden sm:block" itemClasses={{base: "gap-4"}} variant="faded">

                    <DropdownSection aria-label="Produkte" showDivider>
                        <DropdownItem key="gpe">
                        <Link className="text-lg text-[#5ec4d2]" href="/produkte/gpe">GPE</Link>
                        </DropdownItem>

                        <DropdownItem key="designer">
                        <Link className="text-lg text-[#5ec4d2]" href="/produkte/designer">DESIGNER</Link>
                        </DropdownItem>

                        <DropdownItem key="nestingsoftware">
                        <Link className="text-lg text-[#5ec4d2]" href="/produkte/nestingsoftware">NESTING</Link>
                        </DropdownItem>

                        <DropdownItem key="ui">
                        <Link className="text-lg text-[#5ec4d2]" href="/produkte/ui">UI</Link>
                        </DropdownItem>

                        </DropdownSection>
                        
                        <DropdownItem key="bolasys_blog">
                        <Link color="foreground" className="text-lg" href="/blogsite">Bolasys Blog</Link>
                        </DropdownItem>

                         <DropdownItem key="download">
                        <Link color="foreground" className="text-lg" href="/download">Downloads</Link>
                        </DropdownItem>

                        <DropdownItem key="contact">
                        <Link color="foreground" className="text-lg" href="/kontakt">Kontakt</Link>
                        </DropdownItem>


                    </DropdownMenu>
                </Dropdown>
                
                <NavbarContent className="hidden sm:flex" justify="end">
               
                <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/blogsite">Bolasys Blog</Link>
                </NavbarItem> 

                 <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/download">Downloads</Link>
                </NavbarItem>
                
                <NavbarItem className="lg:block md:block sm:hidden">
                    <Link color="foreground" className="text-lg" href="/kontakt">Kontakt</Link>
                </NavbarItem>


            </NavbarContent>

        </Navbar>
        <hr className="new1"/>
        </div>

    )
}

export default NewNavbar;