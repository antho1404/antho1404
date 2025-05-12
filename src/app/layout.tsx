import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antho1404.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Anthony Estebe",
    template: "%s | Anthony Estebe",
  },
  description:
    "Entrepreneur, developer, and creator. Build tools to help startups and founders",
  authors: [{ name: "Anthony Estebe" }],
  creator: "Anthony Estebe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { name: "@antho1404", url: "https://x.com/antho1404" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/anthony-estebe/" },
    { name: "GitHub", url: "https://github.com/antho1404" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-20 p-8 max-w-2xl mx-auto w-full space-y-12">
          <main>{children}</main>
          <footer className="text-center">
            <div className="flex justify-center gap-4 tracking-tight">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
