import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <div className='mt-8 flex flex-col md:flex-row text-black justify-around items-center p-2  text-sm gap-5' >
          <div className=' w-fit p-1 flex flex-col gap-3 lg:w-[30%] text-center items-center'>
            <ul className='flex flex-col mb-3'>
              <li className='flex items-center'>Register Live, Push or Move <FaChevronRight /></li>
              <li className='flex items-center'>About Ableton <FaChevronRight /></li>
              <li className='flex items-center'>Jobs <FaChevronRight /></li>
            </ul>
            <ul className='flex gap-2 text-3xl '>
              <li><FaFacebook /></li>
              <li><BsTwitterX /></li>
              <li><FaYoutube /></li>
              <li><FaInstagramSquare /></li>
              <li><FaTiktok /></li>
              <li><FaDiscord /></li>
            </ul>
          </div>
          <div className='w-fit p-1 flex flex-col gap-3 lg:w-[30%] text-center items-center'>
            <h1 className='text-xl font-bold'>Education</h1>
            <ul>
              <li className='flex items-center'>Offers for students and teachers <FaChevronRight /></li>
              <li className='flex items-center'>Ableton for the Classroom <FaChevronRight /></li>
              <li className='flex items-center'>Ableton for Colleges and Universities <FaChevronRight /></li>
            </ul>
          </div>
          <div className='w-fit p-1 flex flex-col gap-3 items-center lg:w-[30%]'>
            <h1 className='text-xl font-bold'>Sign up to our newsletter</h1>
            <ul className='items-center text-center'>
              <li>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</li>
              <li className='mt-3 flex justify-center '>
                <input type="text" placeholder='Email Address' className='border border-black p-1'/>
                <button className='bg-blue-500 text-white p-1 '>Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      
        {/* //line 2 */}
        <div className='mt-8 lg:flex flex-col lg:gap-[16rem] md:flex-row text-black lg:pl-30 p-2 gap-4 pl-[4.5rem] '>
          <div className='w-fit p-1 flex flex-col gap-3 '>
            <h1 className='text-xl font-bold '>Community</h1>
            <ul>
              <li className='flex items-center'>Find Ableton User Groups <FaChevronRight /></li>
              <li className='flex items-center'>Find Certified Training <FaChevronRight /></li>
              <li className='flex items-center'>Become a Certified Trainer <FaChevronRight /></li>
            </ul>
          </div>
          <div className='w-fit p-1 flex flex-col gap-3 '>
            <h1 className='text-xl font-bold'>Language and Location</h1>
            <div  className='flex gap-3'>
              <div className='bg-gray-300 p-2'>
                <select className='border-none'>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className='bg-gray-300 p-2 w-[100%]'>
                <select className='border-none'>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* //line 3 */}
        <div className='mt-8 flex flex-col md:flex-row text-black justify-between p-4gap-5 '>
          <div className=' md:p-5 flex flex-col md:flex-row gap-3 items-center'>
            <a href="#">Contact Us</a>
            <a href="#">Press Resources</a>
            <a href="#">Legal Info</a>
            <a href="#">Corporate Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Imprint</a>
          </div>
          <div className='flex justify-between lg:w-52 p-2 lg:items-center'>
            <h2>Made in Berlin</h2>
            <img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg" alt="Ableton - Made in Berlin" width="40" height="21"/>
          </div>
        </div>
   </>
 
  )
}

export default Footer