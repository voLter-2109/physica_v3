import { Averia_Sans_Libre, Roboto_Mono } from "next/font/google";
import ThemeComponentProvider from "../providers/theme-provider";

import "../style/globals.css";
import "../style/reset.scss";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const robotoMono2 = Averia_Sans_Libre({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bree-serif",
});

const robotoMono1 = Averia_Sans_Libre({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mystero-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={` ${robotoMono2.variable}, ${robotoMono.variable} ${robotoMono1.variable}`}
    >
      <body id="root" className="font-mystero">
        <ThemeComponentProvider>{children}</ThemeComponentProvider>
      </body>
    </html>
  );
}
