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

function App() {
  const [isLoading, setIstLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIstLoading(false);
    }, 1000);

    Aos.init({
      duration: 500,
      easeing: "ease-i-sine,",
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <Header />
            <AnimatedRoutes />
            <Footer />
            <ScrollToTopButton /> 
            <Whatapp />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
