import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "../site.config";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.name} – Portfolio`,
  description: SITE.bio,
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  openGraph: {
    title: `${SITE.name} – Portfolio`,
    description: SITE.headline,
    url: "https://your-domain.vercel.app",
    siteName: SITE.name,
    images: ["/og.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – Portfolio`,
    description: SITE.headline
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
