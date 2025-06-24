import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export interface UserProps
{
    text: string;
    quelle: string;
}

const Download_Button = ({text,quelle}:UserProps) => 
{
    return (
        <div>
            <Button className="border-cyan-800" variant="bordered" size="lg">
                <Link className="text-[#5ec4d2]" href={quelle} isExternal download target="_blank"  rel="noopener noreferrer">{text}</Link>
                </Button>

        </div>
    )
};

export default Download_Button;
