import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Playground!</h1>
      <Link href="/client" className="btn">
        Bora!
      </Link>
    </>
  );
}
