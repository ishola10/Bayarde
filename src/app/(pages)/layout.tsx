// import { Roboto } from "next/font/google";
import Wrapper from "./Wrapper";
import { ReactNode } from "react";

// Define the metadata type
interface Metadata {
  title: string;
  description: string;
}

// const anybody = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: "normal",
// });

export const metadata: Metadata = {
  title: "Bayarde Services",
  description: "Talent Without Borders, Success Without.",
};

// Define the props type for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}
