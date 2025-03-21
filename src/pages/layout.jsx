import { Outlet } from "react-router";
import { Navbar } from "../components/organism/navbar";
import { Footer } from "../components/molecules/footer";
export const Layout = () => {
  return (
    <div className="layout flex w-full min-h-full overflow-x-hidden  ">
      <Navbar />

      <main className="content w-full   h-screen overflow-y-auto">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
