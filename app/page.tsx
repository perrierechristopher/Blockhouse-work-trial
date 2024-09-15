import Card from "@/components/card/main";
import AppLogo from "@/components/shared/appLogo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <Link href="/dashboard" className="text-white text-2xl">Go to Dashboard</Link>
    </main>
  );
}
