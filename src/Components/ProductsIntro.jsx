import cart from "../assets/green-blue-shopping-cart-yellow.webp";

function ProductsIntro() {
  return (
    <section className="mx-auto w-full bg-gradient-to-r from-slate-700 to-gray-800">
      <div className="wrapperproduct flex min-h-[30rem] flex-col gap-5 px-5 pt-[6rem] xs:flex-col sm:flex-row sm:pt-[5rem]">
        <div className="w-full space-y-3 text-center ss:pt-1 sm:w-1/2 sm:text-start">
          <h3 className="py-4 font-poppins text-4xl font-bold text-green-600 sm:text-6xl">
            Shop Top Solar Products at Unmatched Prices
          </h3>
          <nav className="font-Rubik text-xl font-medium sm:text-2xl">
            <p className="leading-[1.5em] text-slate-400">
              Step into a greener future without stretching your budget. Our
              online solar panel shop is committed to making renewable energy
              accessible for all by offering the most competitive prices on the
              market. Experience cutting-edge technology that turns sunlight
              into electricity.
            </p>
          </nav>
        </div>

        <div className="w-full overflow-hidden rounded-md py-3 sm:w-1/2">
          <img src={cart} alt="cart" className="h-full w-full object-fill" />
        </div>
      </div>
    </section>
  );
}

export default ProductsIntro;
