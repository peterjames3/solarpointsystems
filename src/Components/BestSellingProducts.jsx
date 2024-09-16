import {Cursor, useTypewriter } from 'react-simple-typewriter';

function BestSellingProducts() {
  const [typeEffect] = useTypewriter({
    words: [
      'Our Best selling',
      'Our Best quality',
      "Our most demanded",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
    cursor: Cursor.ALL,
  });

  return (
    <section className='max-w-6xl px-2 my-5 mx-auto'>
      <div className='w-full my-5'>
        <h4 className='text-5xl py-12 font-semibold text-black text-center '>Browse <span className='text-brandC'>{typeEffect}</span> products</h4>
      </div>
 
    </section>
  );
}

export default BestSellingProducts;
