import { useNavigate } from "react-router-dom";
import PropTypes from  'prop-types'



function ProductsItems({ id, img, name, desc, price }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${id}`, { state: { img, name, desc, price } });
  };



  return (
    <>
   
      <section className="font-Inter mx-auto my-2 flex min-h-[35rem] max-w-5xl flex-col rounded-lg bg-cardBg">
        <div className="h-[60%] transform cursor-pointer duration-300 ease-in-out hover:scale-105">
          <img
            src={img}
            loading="lazy"
            alt={name}
            className="object-fit h-[19rem] w-full"
          />
        </div>
        <div className="flex-grow space-y-2 px-2 pt-4 text-center">
          <h2 className="font-poppins text-2xl text-[#4459a7]">{name}</h2>
          <p className="line-clamp-2 font-Rubik text-xl">{desc}</p>
          <h3 className="text-2xl font-semibold text-brandD">Ksh {price}</h3>
          <nav className="pt-4">
            <a
              className="btn--primary cursor-pointer"
              onClick={handleViewDetails}
              aria-label={`View more details about ${name}`}
            >
              More Details
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
ProductsItems.propTypes = {
  id: PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
  img:PropTypes.instanceOf(HTMLImageElement).isRequired,
};

export default ProductsItems;
