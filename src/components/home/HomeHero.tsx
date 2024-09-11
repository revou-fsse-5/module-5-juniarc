import React from 'react';
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <section className="flex justify-start w-full h-2/4 p-10 rounded-2xl bg-yellow-400 relative">
      <div className="max-w-md flex flex-col gap-8 z-10">
        <h1 className="text-black font-black text-5xl">
          Where Every Find Is A Treasure
        </h1>
        <p>
          Experience the thrill of discovering exceptional and unique items. At
          Urban, every product is a hidden gem, offering you quality and value
          with every purchase.
        </p>
        <Link to="/products" className="bg-black px-20 py-3 text-white text-center font-bold rounded-lg w-fit hover:bg-orange-light transition-all">Shop Now</Link>
      </div>
      <div className='absolute top-0 right-0 w-full h-full rounded-2xl'>
        <img className='w-full h-full object-cover object-center rounded-2xl' src="./images/img-headphone.jpg" alt="Headphone" />
      </div>
    </section>
  );
}

export default HomeHero;
