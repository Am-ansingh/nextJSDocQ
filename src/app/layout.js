import { Nunito } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import SignupForm from "@/components/SignUpForm";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "DOC-Q | Create Account",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Background/> */}
        {children}
      </body>
      
    </html>
  );
}
