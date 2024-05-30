import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(Components)/Nav";
import Footer from "./(Components)/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Possesive Panda",
  description: "Possesive for Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
