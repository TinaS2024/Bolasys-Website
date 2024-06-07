
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "cyan" })}>Software&nbsp;</h1>
        <br />
          <p style={{fontSize: "20pt"}}>zur Steuerung von Lasersystemen.</p>
        <br />
        <br />
        <h1 className={title({ color: "cyan" })}>Designer&nbsp;</h1>
          <p style={{fontSize: "20pt"}}>zur Erzeugung grafischen Designs.</p>
        <br />
        <br />
        <h1 className={title({ color: "cyan" })}>GPE&nbsp;</h1>
          <p style={{fontSize: "20pt"}}>mit Auftrags-und Produktionsverwaltungs zur Herstellung von Produkten mit grafischen Designs.</p>  
      </div>

      <div className="flex gap-3">
       
      </div>

    </section>
  );
}

/* npm run dev */