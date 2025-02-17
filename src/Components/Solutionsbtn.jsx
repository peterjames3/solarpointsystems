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
      className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-xl font-medium text-white transition-colors hover:bg-green-800"
    >
      Our Solutions
    </button>
  );
}

export default Solutionsbtn;
