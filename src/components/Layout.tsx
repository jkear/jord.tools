// Layout shell for the app: wires up routing, header/footer,
// and a dynamic background image derived from the current URL.
import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Background } from "./Background";
import { BackgroundProvider } from "./GlassBackgroundContext";

// Route-aware background chooser.
// Given a pathname, returns the appropriate background image URL.
function resolveBackground(pathname: string) {
  if (pathname.startsWith("/knowledge-base/frameworks")) {
    return "/pexels-frameworks-bg.jpg";
  }
  if (pathname.startsWith("/knowledge-base/projects")) {
    return "/pexels-projects-bg.jpg";
  }
  if (pathname === "/") {
    return "/pexels-Home-bg.jpg";
  }
  return "/bg-lava.jpg";
}

export function Layout() {
  // Read the current location from React Router to drive layout decisions.
  const location = useLocation();

  // Memoize the background image so it only recomputes when the pathname changes.
  // This avoids unnecessary re-renders if other location fields change.
  const backgroundImage = useMemo(
    () => resolveBackground(location.pathname),
    [location.pathname]
  );

  /*
  Render app layout:
  - BackgroundProvider: supplies `backgroundImage` via context
  - Background: full-viewport background image
  - Header: global navigation/branding
  - main + Outlet: route content container
  - Footer: global footer
  */
  return (
    <BackgroundProvider value={backgroundImage}>
      {/* 
         tailwind: relative positioning, min height screen, white text color
         .css: position: relative; min-height: 100vh; color: rgb(255 255 255);
      */}
      <div className="relative min-h-screen text-white">
        <Background imageUrl={backgroundImage} />
        <Header />
        {/* 
           tailwind: relative positioning, full width, max width 7xl, auto horizontal margin, padding x 1rem, padding y 4rem
           .css: position: relative; width: 100%; max-width: 80rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; padding-top: 4rem; padding-bottom: 4rem;
        */}
        <main className="relative w-full max-w-7xl mx-auto px-4 py-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </BackgroundProvider>
  );
}
