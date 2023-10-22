import React, { useState } from 'react';

// import menu btn
import { BiMenu } from 'react-icons/bi';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'
      >
        <BiMenu />
      </div>
      <ul
        className={`${
          isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'
        } flex flex-col absolute w-full top-24 left-0 bg-white rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}
      >
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Courses</a>
        </li>
        <li>
          <a href='#'>Facilities</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
