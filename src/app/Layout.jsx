import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./(Components)/(NavBar)/Nav";
import Icon from "./(Components)/(Input Form)/Icon";

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export default function RootLayout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/webinar") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  const toggleNavbar = useCallback((isVisible) => {
    setShowNavbar(isVisible);
  }, []);

  return (
    <NavbarContext.Provider value={{ toggleNavbar }}>
      {showNavbar && <Nav />}
      {children}
      <Icon />
    </NavbarContext.Provider>
  );
}
