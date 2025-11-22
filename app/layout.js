import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sahil Chudasama | Flutter Developer",
  description: "Portfolio of Sahil Chudasama, a passionate Flutter Developer & Mobile App Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-900 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white`}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
