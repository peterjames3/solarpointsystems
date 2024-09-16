import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function OrderNow({ name, price, features }) {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    // Navigate to the /order page with system details
    navigate("/order", { state: { name, price, features } });
  };

  return (
    <div>
      <button
        onClick={handleOrderNowClick}
        type="button"
        aria-label={`Order ${name}`}
        className="btn font-semibold transition-all delay-300 hover:text-white"
      >
        Order Now
      </button>
    </div>
  );
}
OrderNow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderNow;
