import { ThemeProvider, THEME_SCRIPT } from "../components/theme-provider/ThemeProvider";
import localFont from "next/font/local";
import { Footer } from "@/components/UI/footer";
import { PopupWidget } from "@/components/popup-widget";
import { ServiceWorkerRegister } from "@/components/service-worker/ServiceWorkerRegister";
import Header from "@/components/UI/header";
import Layout from "@/components/UI/layout";
import { faConstants } from "../../public/locales/fa/common";
import "./globals.css";

export const metadata = {
  title: faConstants.pageTitle,
  description: faConstants.companyDescription,
  appleWebApp: { capable: true, title: faConstants.pageTitle, statusBarStyle: "default" },
};

export const viewport = { themeColor: "#86508e" };

const vazirMatn = localFont({
  src: "./fonts/Vazirmatn[wght].woff2",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>

      <body className={vazirMatn.className}>
        <ThemeProvider>
          <Header />
          <Layout locale="fa">{children}</Layout>
          <PopupWidget />
          <Footer />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
