import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "ChiroCare",
  description: "ChiroCare is a chiropractic clinic in the heart of the city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
