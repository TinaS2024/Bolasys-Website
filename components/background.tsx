
export interface UserProps
{
  opacity: string;
  top: string;
  left: string;
  
}

export const Background = ({opacity,top,left}:UserProps) => {

 

  return (
    <header className="w-full flex items-center justify-center py-60">
    <div className="w-full h-full flex items-center justify-center bannerbackground"
    style={{
    position: "fixed",
    marginTop: `${top}`,
    marginLeft:  `${left}`,
    width: "100vw",
    height: "100vh",
    opacity: `${opacity}`,
  }}>
    </div>
    </header>
  
  );
};
