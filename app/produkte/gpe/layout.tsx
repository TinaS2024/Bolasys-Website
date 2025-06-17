export default function GPELayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center md:max-w-4xl lg:max-w-5xl">
          {children}
        </div>
      </section>
    );
  }
  