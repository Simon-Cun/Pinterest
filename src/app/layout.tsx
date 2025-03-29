import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Lora } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora", // Updated to use a more descriptive variable name
});

export const metadata = {
  title: "Pinterest",
  description: "Pinterest Clone",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${space.className} ${lora.variable}`}>
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
