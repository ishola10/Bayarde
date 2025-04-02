"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-agGreen rounded-full animate-spin"></div>
    </main>
   
  );
}
