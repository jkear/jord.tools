import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Background } from "./Background";

export function Layout() {
  return (
    <div className="min-h-screen p-4 lg:p-8 dark relative">
      <Background />
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
