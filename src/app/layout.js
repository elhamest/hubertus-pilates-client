import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Footer } from "@/components/UI/footer";
import { PopupWidget } from "@/components/popup-widget";

import { faConstants } from "../../public/locales/fa/common";
import "./globals.css";
import Header from "@/components/UI/header";

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
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className={vazirMatn.className}>
        <ThemeProvider attribute="class">
          <Header />
          <div>{children}</div>
          <PopupWidget />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
