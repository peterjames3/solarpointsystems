import React from "react";
import { useNavigate } from "react-router-dom";

function RelatedProducts({ currentProductId, category, products }) {
  const navigate = useNavigate();
  console.log("Current Product ID:", currentProductId);
  console.log("Category:", category);
  console.log("Products Data:", products);
  // Filter related products by category, excluding the current product
  const relatedProducts = products.filter(
    (product) =>
      product.category === category && product.id !== currentProductId,
  );

  // Limit the number of related products to display (e.g., 4)
  const displayedProducts = relatedProducts.slice(0, 4);

  const handleViewDetails = (product) => {
    const productNameForURL = product.name.toLowerCase().replace(/ /g, "-");
    navigate(`/products/${productNameForURL}`, {
      state: {
        img: product.img,
        name: product.name,
        desc: product.desc,
        price: product.price,
      },
    });
  };

  return (
    <div className="wrapper mt-8">
      <h3 className="text-2xl font-bold">Related Products</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="transform cursor-pointer rounded-lg bg-cardBg p-4 transition-transform duration-300 hover:scale-105"
            onClick={() => handleViewDetails(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-40 w-full object-contain"
            />
            <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
            <p className="line-clamp-2 text-sm text-gray-600">{product.desc}</p>
            <p className="mt-2 text-lg font-bold">Ksh {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
