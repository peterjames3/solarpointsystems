import Blog1 from "../assets/blo3.webp";
import Blog2 from "../assets/blog2.webp";
import Blog3 from "../assets/blog3.webp";
import SolarPanel from "../assets/Solarpanel..webp";
import BlogButton from "./BlogButton";

function Blog() {
  return (
    <section className="wrapper  flex flex-col md:flex-row gap-5 ">
      <div className="w-full space-y-6 px-5  md:px-10 md:w-1/2">
        <h4 className="text-5xl  text-black font-semibold font-poppins">
          Our Blog
        </h4>
        <p className="text-xl font-Rubik">
          We invite you to bookmark our blog, subscribe to our newsletter, and
          follow us on social media to stay updated on our latest posts and
          features. Your feedback and contributions are invaluable to us, as
          they help us grow and improve. Share your thoughts, ask questions, and
          let&apos;s foster a vibrant community of enthusiasts and professionals
          dedicated to advancing our industry.
        </p>
        <BlogButton />
      </div>
      <div className="w-full md:w-1/2  px-5 grid grid-cols-1 grid-rows-4 ss:grid-cols-2 ss:grid-rows-2 gap-5  min-h-[30rem]">
        <div className="flex flex-col  space-y-3">
          <div className="relative  flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog1}
              alt="blog-1 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
            <h5 className="text-2xl text-black font-semibold">
              &apos;Dawn of a New Era: How Solar Power is Lighting Up the
              World&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative  flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog2}
              alt="blog-2 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
            <h5 className="text-2xl text-black font-semibold">
              &apos;Green Giants: The Role of Solar Farms in Sustainable
              Energy&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative  flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog3}
              alt="blog-3 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
            <h5 className="text-2xl text-black font-semibold">
              &apos;From Sun to Socket: The Journey of Solar Energy into Our
              Homes&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative  flex-1 bg-gradient-to-b from-slate-500 to-gray-700">
            <img
              src={SolarPanel}
              alt="blog-4 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="divide-y-2 divide-slate-500 h-[10rem] w-full">
            <h5 className="text-2xl text-black font-semibold">
              &apos;Harnessing the Sun: Innovations and Advances in Solar Panel
              Technology&apos;
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
