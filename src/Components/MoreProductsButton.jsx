import { useNavigate } from "react-router-dom";

function MoreProductsButton() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleClick() {
    setTimeout(() => {
      navigate("/products"); // Use the navigate function to redirect
    }, 1000);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Discover more products"
      className="btn font-semibold transition-all delay-300 hover:text-white"
    >
      More Products
    </button>
  );
}

export default MoreProductsButton;
