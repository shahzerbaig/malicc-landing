import "./globals.css";

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
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
