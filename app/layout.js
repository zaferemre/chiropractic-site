import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "ChiroCare",
  description: "ChiroCare is a chiropractic clinic in the heart of the city.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
