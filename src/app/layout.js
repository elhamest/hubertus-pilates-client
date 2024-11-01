import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

import { faConstants } from "../../public/locales/fa/common";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: faConstants.pageTitle,
  description: faConstants.companyDescription,
};

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
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
