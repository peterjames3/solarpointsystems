import { useNavigate } from "react-router-dom";

function AboutUsButton() {
  let navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Learn more about us"
      className="btn--primary font-poppins"
    >
      Learn More{" "}
    </button>
  );
}

export default AboutUsButton;
