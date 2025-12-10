import "./globals.css";
import Header from "./components/Header";
import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-KZHRWZ6Z'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KZHRWZ6Z');`}
      </Script>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZHRWZ6Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
