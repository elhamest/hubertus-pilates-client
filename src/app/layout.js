import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PopupWidget } from "@/components/popup-widget";

import { faConstants } from "../../public/locales/fa/common";
import "./globals.css";

export const metadata = {
  title: faConstants.pageTitle,
  description: faConstants.companyDescription,
};

const vazirMatn = localFont({
  src: "./fonts/Vazirmatn-Regular.woff2",
  variable: "--fonr-vazir-matn",
  wright: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirMatn.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
