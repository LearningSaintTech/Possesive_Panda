import localFont from "next/font/local";
import "./globals.css";

const Aeonik = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik/fonnts.com-Aeonik_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/fonnts.com-Aeonik_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/fonnts.com-Aeonik_Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik/fonnts.com-Aeonik_Black.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Possesive Panda",
  description: "Possesive for Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Aeonik.className}>{children}</body>
    </html>
  );
}
