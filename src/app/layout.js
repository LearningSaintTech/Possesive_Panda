import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(Components)/Nav";
import Footer from "./(Components)/Footer";
import Line from "./(Components)/Line";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata = {
  title: "Possesive Panda",
  description: "Possesive for Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Nav />
        {children}
        <Line />
        <Footer />
      </body>
    </html>
  );
}
