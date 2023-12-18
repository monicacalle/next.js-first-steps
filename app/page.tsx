import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        hello
      </span>
      <Link href={"/about"}>About Page</Link>
    </main>
  );
}
