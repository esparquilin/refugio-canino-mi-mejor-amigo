import { Outlet, ScrollRestoration } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";

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
