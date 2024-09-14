"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(Components)/(NavBar)/Nav";
import { createContext, useContext, useState, useCallback } from "react";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

// Create a context to hold the toggleNavbar function
const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export default function RootLayout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);

  // Function to toggle Navbar visibility
  const toggleNavbar = useCallback((isVisible) => {
    setShowNavbar(isVisible);
  }, []);

  return (
    <html lang="en" className={poppins.className}> {/* Apply here */}
      <head>
        {/* Meta tags and scripts */}
      </head>
      <body>
        <NavbarContext.Provider value={{ toggleNavbar }}>
          {showNavbar && <Nav />}
          {children}
        </NavbarContext.Provider>
      </body>
    </html>
  );
}
