import React, { useState } from 'react';

const Nav = () => {
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
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

export default Nav;
