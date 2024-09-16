import PropTypes from 'prop-types';


export function BlogPosts({ blog, goBack }) {
    if (!blog) {
      return <p>Sorry, the requested blog does not exist.</p>; 
     }
  
    return (
      <article>
        <h1 className="text-4xl font-bold font-poppins">{blog.title}</h1>
        <img src={blog.image} alt="Blog cover" className="my-4" />
        <p className="text-xl font-Rubik">{blog.content}</p>
        <button
          onClick={goBack}
          className="btn--primary"
        >
          Go Back
        </button>
      </article>
    );
  }

BlogPosts.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
};