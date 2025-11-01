import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Footer } from "@/components/UI/footer";
import { PopupWidget } from "@/components/popup-widget";
import Header from "@/components/UI/header";
import Layout from "@/components/UI/layout";
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

export default function RootLayout({ children, params }) {
  // lang={params.locale || "fa"} dir={params.locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirMatn.className}>
        <ThemeProvider attribute="class">
          <Header locale={params.locale} />
          {/* locale={params.locale || "fa"} */}
          <Layout locale={params.locale}>{children}</Layout>
          <PopupWidget />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
