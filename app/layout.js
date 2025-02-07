import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "ChiroCare",
  description: "ChiroCare is a chiropractic clinic in the heart of the city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
