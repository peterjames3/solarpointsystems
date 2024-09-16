import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, name, desc, price } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 2);

    // Convert price to a number
    let removedComma = price.split(",").join("");
    const updatedPrice = parseFloat(removedComma);

    // Update total cost whenever quantity or price changes
    if (!isNaN(updatedPrice)) {
      setTotalCost(updatedPrice * quantity);
    } else {
      console.error("Invalid price value:", price);
    }
  }, [price, quantity]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity); // Ensure quantity is at least 1
  };

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
      </Helmet>
      <article className="wrapper grid grid-cols-1 gap-3 bg-cardBg p-4 pt-[10rem] ss:grid-cols-2 md:grid-cols-3">
        <figure className="min-h-96">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </figure>
        <div className="pt-12">
          <figcaption className="font-poppins text-3xl font-bold">
            {name}
          </figcaption>
          <p className="mt-4 font-Rubik text-lg">{desc}</p>
          <h4 className="mt-4 font-Rubik text-2xl font-semibold">
            Price: Ksh {price}
          </h4>
          <button className="btn--primary mt-10" onClick={handleGoBack}
          type='button'
          aria-label='Go back to previous page'>
          
            Go Back
          </button>
        </div>
        <div className="pt-10 ss:col-span-2 md:col-span-1">
          <div className="mt-2">
            <label
              htmlFor="quantity"
              className="block font-poppins text-2xl font-bold text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="mt-1 block w-full rounded-sm border border-brandD p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            />
            <p className="mt-1 font-Rubik text-lg font-semibold text-gray-900">
              Total: Ksh {totalCost.toFixed(2)}
            </p>
          </div>
          <div className="mt-2 space-y-2 text-left">
            <h3 className="font-poppins text-xl font-bold">
              Steps for Payment:
            </h3>
            <ul className="ml-4 list-decimal space-y-1 font-Rubik">
              <li>Open Mpesa app and select lipa na Mpesa.</li>
              <li>
                Select &apos;Pay bill, Enter Business Number use &apos;:522533.
              </li>
              <li>Select &apos;Enter Account Number&apos;:7642435.</li>

              <li>Press &apos;OK&apos;.</li>
              <li>Call us on 0703704062 to confirm your delivery location.</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProductDetailsPage;
