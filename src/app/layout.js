import {
  Poppins,
  Work_Sans,
  Source_Serif_4,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/contexts/LoadingContext";
import LoadingScreen from "@/Components/LoadingScreen";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "True Clean",
  description: "A clean and modern website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} ${sourceSerif4.variable} ${libreBaskerville.variable} antialiased`}
      >
        <LoadingProvider>
          {/* <LoadingScreen /> */}
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
