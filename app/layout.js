import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "aixpense - Chat to Track Expenses, Budgeting Made Simple",
  description:
    "aixpense helps you track your expenses effortlessly with AI. Log purchases like chatting with a friend, and get real-time smart insights.",
  keywords: [
    "aixpense",
    "AI expense tracker",
    "chatbot budgeting",
    "smart spending app",
  ],
  alternates: {
    canonical: "https://aixpense.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-main`}>
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
