import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "malicc — Neuromarketing-powered Ecommerce SaaS",
  description:
    "malicc helps D2C brands convert more customers using ethically applied neuromarketing, Web3-ready infrastructure, and conversion-first design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-1">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
