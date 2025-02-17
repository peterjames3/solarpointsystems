import { Phone } from "lucide-react";
const Call = () => {
  return (
    <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-green-700 transition-colors hover:bg-gray-100">
      <Phone className="size-5" />
      <a href="tel:+254 703704062">+254 703704062</a>{" "}
    </button>
  );
};
export default Call;
