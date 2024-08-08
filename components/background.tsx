import banner1 from "@/app/bilder/banner2.png";

export const Background = () => {


  return (
    <header className="w-full flex items-center justify-center py-60">
    <div className="w-full h-full flex items-center justify-center"
    style={{
    backgroundImage: `url(${banner1.src})`,
    position: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    opacity: "40%",
  }}>
    
    </div>
    </header>
  
  );
};
