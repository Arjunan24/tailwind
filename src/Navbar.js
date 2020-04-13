

import React, { useState } from 'react';


function  Navbar() {
let [isExpanded,toggleExpansion]=useState(false,)


  return (
    <nav>
      <div className="container rounded px-3 py-4 bg-teal-500 shadow-lg md:flex  md:right sm:flex-1 md:flex-auto lg:flex-initial xl:flex  justify-between" >
        <h2 className="hover:underline text-white hover:text-black">Home</h2>
        
        {/* //Only visible Mobile screens and ipad */}
        <div  class="cursor-pointer block lg:hidden   md:justify-end  ">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" 
         onClick={() => toggleExpansion(!isExpanded)}>
      {/* //Hamburg Icon */}
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    </div>
    {/* //end */}

      {/* //Button Click Collapse and expand */}
    <div className={`${
            isExpanded ? `block` : `hidden`
          } lg:block  lg:w-auto sm:text-left`}>
        <ul className="lg:inline-flex md:text-left md:block">
          <li>
            <a href="#" className="block lg:inline-block lg:px-4  text-white hover:text-black hover:underline hover:py-3 text-grey-darkest">Feautures</a>
          </li>
          <li>
            <a href="#" className=" block lg:inline-block lg:px-4 text-white hover:text-black hover:underline ">contact</a>
          </li>
          <li>
            <a href="#" className=" block lg:inline-block lg:px-4 text-white hover:text-black hover:underline ">feedback</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
