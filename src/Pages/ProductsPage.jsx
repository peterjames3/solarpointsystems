import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // Import for URL query handling
import ProductsData from "../ProductsData";
import ProductsIntro from "../Components/ProductsIntro";
import BestSellingProducts from "../Components/BestSellingProducts";
import ProductsItems from "../Components/ProductsItems";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get("search") || "",
  );
  const [filteredData, setFilteredData] = useState(ProductsData);
  const [currentPage, setCurrentPage] = useState(
    () => parseInt(searchParams.get("page")) || 1,
  );
  const [activeCategory, setActiveCategory] = useState(
    () => searchParams.get("category") || "All",
  );
  const itemsPerPage = 9;

  useEffect(() => {
    /* window.scrollTo(0, 0); */
    filterProducts(searchTerm, activeCategory);
  }, [searchTerm, activeCategory]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setSearchParams({ search: value, category: activeCategory, page: 1 });
    filterProducts(value, activeCategory);
  };

  const filterProducts = (searchValue, categoryValue) => {
    const filtered = ProductsData.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchValue) ||
          item.desc.toLowerCase().includes(searchValue) ||
          item.price.toLowerCase().includes(searchValue)) &&
        (categoryValue === "All" || item.category === categoryValue),
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setSearchParams({ search: searchTerm, category, page: 1 });
    filterProducts(searchTerm, category);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({
      search: searchTerm,
      category: activeCategory,
      page: pageNumber,
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const getGridClass = () => {
    switch (currentItems.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
    }
  };

  let gridContainerClasses = `max-w-7xl mt-1 mx-auto grid items-center gap-5 ${getGridClass()}`;

  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <motion.section
      className="flex w-full flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Our Products | SolarPoint System</title>
        {/* SEO meta tags */}
      </Helmet>

      <ProductsIntro />
      <BestSellingProducts />

      {/* Search and Filter Section */}
      <div className="mx-auto mb-4 flex flex-wrap items-center gap-2 px-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="rounded border-2 border-brandD p-3 text-xl outline-none focus:ring-1 focus:ring-brandC"
        />

        <button
          onClick={() => handleCategoryFilter("All")}
          style={activeCategory === "All" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("Inverters")}
          style={activeCategory === "Inverters" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Inverters
        </button>
        <button
          onClick={() => handleCategoryFilter("Charge controllers")}
          style={activeCategory === "Charge controllers" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Charge controllers
        </button>
        <button
          onClick={() => handleCategoryFilter("Batteries")}
          style={activeCategory === "Batteries" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Batteries
        </button>
        <button
          onClick={() => handleCategoryFilter("Solar Panel")}
          style={activeCategory === "Solar Panel" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Solar Panels
        </button>
        <button
          onClick={() => handleCategoryFilter("LEDs")}
          style={activeCategory === "LEDs" ? activeStyle : null}
          className="rounded border-2 border-brandD p-3 text-xl transition-all delay-200 hover:border-black hover:bg-black hover:text-white"
        >
          Solar Lights
        </button>
      </div>

      {/* Product Display Section */}
      <div className={gridContainerClasses}>
        {currentItems.length > 0 ? (
          currentItems.map((item) => <ProductsItems key={item.id} {...item} />)
        ) : (
          <div className="col-span-full pt-10 text-3xl">No products found.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredData.length > itemsPerPage && (
        <div className="mt-4 flex justify-center">
          {Array.from(
            { length: Math.ceil(filteredData.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 rounded border p-2 ${
                  i + 1 === currentPage ? "bg-textColor text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ),
          )}
        </div>
      )}
    </motion.section>
  );
}

export default ProductsPage;
