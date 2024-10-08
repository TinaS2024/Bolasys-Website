import banner1 from "@/app/bilder/banner2.png";

export interface UserProps
{
  opacity: string;
  left: string;
}

export const Background = ({opacity,left}:UserProps) => {

 

  return (
    <header className="w-full flex items-center justify-center py-60">
    <div className="w-full h-full flex items-center justify-center background"
    style={{
    backgroundImage: `url(${banner1.src})`,
    position: "fixed",
    marginTop: `-200px`,
    marginLeft:  `${left}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    opacity: `${opacity}`,
  }}>
    </div>
    </header>
  
  );
};
