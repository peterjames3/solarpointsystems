import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import Spinner from "./Components/Spinner";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Whatapp from "./Components/Whatapp";
import Aos from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
    <Router>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <main className="min-h-[calc(100vh-150px)]">
              <AnimatedRoutes />
            </main>
            <Footer />
            <ScrollToTopButton />
            <Whatapp />
          </>
        )}
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
