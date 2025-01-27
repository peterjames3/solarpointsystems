import { useNavigate } from "react-router-dom";

function Solutionsbtn() {
  let navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/solutions");
    }, 1000);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Contact us"
      className="btn--primary"
    >
      Our Solutions
    </button>
  );
}

export default Solutionsbtn;
