import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
function AboutUsButton() {
  let navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="start your solar journey"
      className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-xl font-medium text-white transition-colors hover:bg-green-800"
    >
      Start your Solar Journey <ArrowRight className="size-5" />
    </button>
  );
}

export default AboutUsButton;
