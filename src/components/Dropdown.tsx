import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      {/* More button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:inline-flex text-black hover:underline items-center gap-1 font-bold"
      >
        More {isOpen ? "−" : "+" }
      </button>

      {/* Dropdown container */}
      {isOpen && (
        <div className="absolute left-[7.5rem] mt-4 transform -translate-x-1/2 w-screen bg-white border-t border-gray-300 py-8 px-24 shadow-md z-50 overflow-hidden">
          {/* Section 1: More on Ableton.com */}
          <h2 className="font-bold text-lg mb-4">More on Ableton.com:</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10 text-[15px]">
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Ableton for the Classroom</a>
            <a href="#" className="hover:underline">Ableton for Colleges and Universities</a>
            <a href="#" className="hover:underline">Certified Training</a>
            <a href="#" className="hover:underline">About Ableton</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Apprenticeships</a>
          </div>

          {/* Section 2: More from Ableton */}
          <h2 className="font-bold text-lg mb-4">More from Ableton:</h2>
          <div className="grid grid-cols-4 gap-8 text-[15px]">
            <div>
              <h3 className="font-semibold mb-1">Loop</h3>
              <p>
                Watch talks, performances and features from Ableton's summit for
                music makers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Learning Music</h3>
              <p>
                Learn the fundamentals of music making right in your browser. It's free!
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Learning Synths</h3>
              <p>
                Get started with synthesis using our interactive website.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Making Music</h3>
              <p>
                Read our manual on the art and techniques of electronic music
                production.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
