import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// Import Wave component

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen text-black relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto sm:p-0 lg:p-6">
        {/* Center the content */}
        <div className="w-full mx-auto text-center pt-8">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
