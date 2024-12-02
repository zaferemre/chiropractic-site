import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize the weights you need
});
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

export const metadata = {
  title: "OC Chiropractor",
  description: "Professional chiropractic care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {" "}
        <Header /> {children}{" "}
      </body>{" "}
    </html>
  );
}
