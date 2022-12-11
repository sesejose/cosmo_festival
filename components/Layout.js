import { Children } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
