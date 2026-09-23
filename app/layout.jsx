import { Heebo, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-heebo",
})

export const metadata = {
  title: "JobsAI | המשרה הבאה שלך אצלנו",
  description: "כל המשרות שלכם מרוכזות במקום אחד, עם AI שעוזר לכם לשפר את הסיכויים למצוא עבודה",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="he" className={cn("h-full", "antialiased", heebo.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-(--color-primary)">
        <Navbar />
        <main className="flex-1">
         {children}
        </main>
      </body>
    </html>
  );
}
