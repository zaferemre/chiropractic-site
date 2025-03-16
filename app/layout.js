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
        {/* Favicon (Make sure logo.png is in /public/images) */}
        <link
          rel="icon"
          href="/images/logo.png"
          type="image/png"
          sizes="32x32"
        />

        {/* Metadata for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
