import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Serif,
} from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-plex-serif",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}
      lang="en"
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
