import { ThemeProvider } from "../components/theme-provider/ThemeProvider";
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

// The inline script sets the .dark class immediately based on localStorage or system preference, avoiding FOUC. flash of unstyled content
export default function RootLayout({ children, params }) {
  // lang={params.locale || "fa"} dir={params.locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className={vazirMatn.className}>
        <ThemeProvider>
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
