

function Button({ onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick} // Use the passed onClick function
        className='w-[13rem] btn--primary my-4 mx-auto text-white font-inter font-semibold'
      >
        Order Now
      </button>
    </>
  );
}

export default Button;
