import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    // Main container to wrap the entire layout, using flexbox for layout control
    <div className="flex flex-col min-h-screen">
      {/* Header component that appears at the top of every page */}
      <Header />
      {/* Main content area, flex-1 ensures it takes up the available space between header and footer */}
      <main className="flex-1">
        {/* Outlet renders the current route's component inside the main layout */}
        <Outlet />
      </main>
      {/* Footer component that appears at the bottom of every page */}
      <Footer />
    </div>
  );
};

export default AppLayout;
