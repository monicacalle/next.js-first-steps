import { Navbar } from "@/components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <span className="text-7xl">page</span>
        {children}
      </main>
    </>
  );
}
