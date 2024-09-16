import { useState } from "react";

function LedsProducts({ img, name, desc, price }) {
  return (
  
    <div className= ' my-7 mx-auto min-h-[30rem] rounded-md  max-w-5xl flex flex-col  font-Inter gap-5'>
    <div  className="h-[45%]  hover:scale-105 transforn ease-in-out duration-300 cursor-pointer" >
              <img src={img} loading="lazy" alt="Jackery" className="object-fit w-full h-full"/>
      </div>
      <div className=" bg-cardBg flex-grow px-1 pt-7 space-y-2 text-center">
      <h2 className='text-2xl font-poppins text-textColor'>{name}</h2>
      <p className='text-xl font-Rubik'>{desc}</p>
      <h3 className='text-2xl font-semibold'>{price}</h3>
         
      </div>
    </div>
   
  );
}

export default LedsProducts;
