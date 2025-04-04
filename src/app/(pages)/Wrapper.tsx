import { ReactNode } from "react";
import Header from "@/components/Header";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-12">
        {children}
      </main>
    </div>
  );
}
