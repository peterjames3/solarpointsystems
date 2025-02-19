import { useNavigate } from "react-router-dom";

function ContactUsButton() {
  let navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Contact us"
      className="btn--primary"
    >
      Get a Free Solar Consultation
    </button>
  );
}

export default ContactUsButton;
