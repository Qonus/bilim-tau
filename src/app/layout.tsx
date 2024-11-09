import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../styles/globals.scss";
import Navbar from "../../components/NavbarComponent/Navbar";
import SessionWrapper from "../../components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BilimTau",
  description:
    "Обменивайтесь учебными материалами со школьниками со всего казахстана!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          <main style={{ paddingTop: '120px' }}>
            {children}
          </main>
        </body>
      </html>
    </SessionWrapper>
  );
}
