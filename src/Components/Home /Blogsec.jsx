import Blog1 from "../../assets/blo3.webp";
import Blog2 from "../../assets/blog2.webp";
import Blog3 from "../../assets/blog3.webp";
import SolarPanel from "../../assets/Solarpanel..webp";
import BlogButton from "../BlogButton";

function Blog() {
  return (
    <section className="wrapper flex flex-col gap-5 md:flex-row">
      <div className="w-full space-y-6 px-5 md:w-1/2 md:px-10">
        <h4 className="font-poppins text-5xl font-semibold text-black">
          Our Blog
        </h4>
        <p className="font-Rubik text-xl">
          We invite you to bookmark our blog, subscribe to our newsletter, and
          follow us on social media to stay updated on our latest posts and
          features. Your feedback and contributions are invaluable to us, as
          they help us grow and improve. Share your thoughts, ask questions, and
          let&apos;s foster a vibrant community of enthusiasts and professionals
          dedicated to advancing our industry.
        </p>
        <BlogButton />
      </div>
      <div className="grid min-h-[30rem] w-full grid-cols-1 grid-rows-4 gap-5 px-5 ss:grid-cols-2 ss:grid-rows-2 md:w-1/2">
        <div className="flex flex-col space-y-3">
          <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog1}
              alt="blog-1 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
            <h5 className="text-2xl font-semibold text-black">
              &apos;Dawn of a New Era: How Solar Power is Lighting Up the
              World&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog2}
              alt="blog-2 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
            <h5 className="text-2xl font-semibold text-black">
              &apos;Green Giants: The Role of Solar Farms in Sustainable
              Energy&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
            <img
              src={Blog3}
              alt="blog-3 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
            <h5 className="text-2xl font-semibold text-black">
              &apos;From Sun to Socket: The Journey of Solar Energy into Our
              Homes&apos;
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-700">
            <img
              src={SolarPanel}
              alt="blog-4 img"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
            <h5 className="text-2xl font-semibold text-black">
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
