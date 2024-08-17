import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance App",
  description: "Track Your Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <Header />
          <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
