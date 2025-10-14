import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Head = () => {
  return (
    <div className="
  flex flex-col bg-[url('https://ableton-production.imgix.net/uploads/homepage-teasers/RTO_Homepage_Takeover_1189x973_px.jpg?auto=format&fit=crop&fm=jpg&h=565&ixjsv=1.1.3&w=1366')] bg-cover w-full bg-center bg-no-repeat h-[300px] justify-center mb-5 lg:h-[500px]">
      <div className="text-black  flex flex-col items-start m p-[35px] w-full lg:pl-[10rem] lg:mt-18 ">
        <h1 className='md:text-2xl text-xl text-wrap min-w-fit lg:text-[4rem] '>Spread the cost of Live 12 Suite with rent-to-own.</h1>
        
        <a
          href="#"
          className="underline items-center gap-2 text-xl lg:text-3xl flex "
        >
          Learn more <FaChevronRight />
        </a>
      </div>
    </div>
  );
};

export default Head;
