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
      Contact Us
    </button>
  );
}

export default ContactUsButton;
