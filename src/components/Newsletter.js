import React from 'react';

// import icons
import { MdEmail } from 'react-icons/md';

const Newsletter = () => {
  return (
    <section className='section-sm lg:section-lg bg-primary-h-[520px]'>
      <div className='container mx-auto'>
        <div
          className='border-[8px] border-pramery-300 rounded-lg text-center pt-[70px] pb-12'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-offset='300'
        >
          <h4
            className='text-[26px] text-black font-bold mb-[14px]'
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-offset='300'
          >
            Subscribe Our Classes
          </h4>
          <p
            className='text-dark-200 mb-12'
            data-aos='fade-up'
            data-aos-delay='800'
            data-aos-offset='300'
          >
            Subscribe the ayurvea class
          </p>
          <form
            className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4'
            data-aos='fade-up'
            data-aos-delay='1000'
          >
            <div className='w-full relative flex'>
              <div className='absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300'>
                <MdEmail />
              </div>
              <input
                type='email'
                className='form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-green pl-[60px]'
                placeholder='Enter your email address'
              />
            </div>
            <button className='btn btn-lg btn-green text-black w-full lg:max-w-[180px] hover:bg-green hover:text-white'>
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
