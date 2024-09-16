import { useNavigate } from 'react-router-dom';

function BlogButton() {
  let navigate = useNavigate(); 

  function handleClick() {
  
    setTimeout(() => {
      navigate('/blog'); 
    }, 1000);
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label='See more blog post'
      className="btn mt-5 w-[100%] font-semibold transition-all delay-300 hover:text-white xs:w-[30%] md:w-[30%] md:px-8 lg:px-10 lg:py-3"
    >
      See More
    </button>
  );
}

export default BlogButton;
