import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

import { Provider } from "./components/theme-provider/Provider";
import Footer from "./components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

// 1. Import and configure Inter (it is a variable font by default)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ideaVault | Live Platform for Innovators & Startup Builders",
    template: "%s | ideaVault",
  },
  description: "ideaVault is a dynamic platform for startup creators to validate ideas, launch custom interactive polls, and collaborate with global builders.",
  keywords: ["ideaVault", "startup ideas", "validation polls", "entrepreneurship", "collaboration"],
  authors: [{ name: "ideaVault Team" }],
  creator: "ideaVault",
  openGraph: {
    title: "ideaVault | Live Platform for Innovators & Startup Builders",
    description: "Launch startup ideas, attach real-time validation polls, and collaborate with global builders on ideaVault.",
    siteName: "ideaVault",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ideaVault | Live Platform for Innovators & Startup Builders",
    description: "Launch startup ideas, attach real-time validation polls, and collaborate on ideaVault.",
  }
};


export default function RootLayout({ children }) {
  return (
    <html

      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col dark:bg-slate-950 dark:text-slate-50 text-slate-950 bg-slate-50">

        <Provider

          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
