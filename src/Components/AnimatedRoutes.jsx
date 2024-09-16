import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/ProductsPage";
import Blog from "../Pages/Blog";
import ProductsDetailsPage from "./ProductsDetailsPage";
import Contact from "../Pages/Contact";
import Solutions from "../Pages/Solutions";
import Projects from "../Pages/Projects";
import PowerBackup from "../Pages/PowerBackup";
import SolarHybrid from "../Pages/SolarHybrid";
import SolarWaterHeaters from "../Pages/SolarWaterHeaters";
import SolarWaterPump from "../Pages/SolarWaterPump";
import SolarAirConditioner from "../Pages/SolarAirConditioner";
import SolarWaterPurifier from "../Pages/SolarWaterPurifier";
import { lazy, Suspense } from "react";
const ProjectsDetailsPage = lazy(() => import("./ProjectsDetailsPage"));
const NoPage = lazy(() => import("../Pages/NoPage"));
const OrderPage = lazy(() => import("../Pages/OrderPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsDetailsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/powerbackup" element={<PowerBackup />} />
          <Route path="/solarhybrid" element={<SolarHybrid />} />
          <Route path="/solarwaterheaters" element={<SolarWaterHeaters />} />
          <Route
            path="/solarairconditioner"
            element={<SolarAirConditioner />}
          />
          <Route path="/solarwaterpurifier" element={<SolarWaterPurifier />} />
          <Route path="/solarwaterpump" element={<SolarWaterPump />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
