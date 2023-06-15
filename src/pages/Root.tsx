import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer.js/Footer";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
