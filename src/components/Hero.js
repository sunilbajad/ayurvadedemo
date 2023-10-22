import React from 'react';
// import parallax
import { Parallax } from 'react-parallax';
// import image
import Image from '../assets/img/hero/guy1.png';
import Header from './Header';

const Hero = () => {
  return (
    <section className='min-h-[700px] lg:min-h-[1000px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top'>
      <div className='container mx-auto'>
        <Header />
        <div className='flex flex-col items-center lg:flex-row lg:items-start pt-32 lg:pt-32'>
          <div className='flex-1 lg:mt-12'>
            <h1
              className='h1 mb-3 lg:mb-[22px]'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Making ayurvea a  <br />way  of life of Ayurveda Practice
            </h1>
            <p
              className='mb-6 lg:mb-12 max-w-[480px] lg:text-lg'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Ayurveda is a way of life, but we have to make it possible to follow for each of us & our patients too! 
              The courses offered by us will 
              help you to sail the journey of your ayurveda practice with core ayurvedic concept and confidence too.
            </p>
            <div
              className='mb-12 space-x-4'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <button className='btn btn-sm lg:btn-lg btn-green'>
                Get started
              </button>
              <button className='btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 lg:px-4 hover:bg-stroke-3 transition'>
                Learn more
              </button>
            </div>
          </div>
          <div className='w-full bg-circle bg-cover lg:bg-none lg:w-auto'>
            <div
              className='flex-1 flex justify-center lg:justify-end'
              data-aos='fade-left'
              data-aos-delay='600'
            >
              <div className='w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0'>
                <Parallax
                  className='w-full h-full p-28 lg:p-16'
                  bgImage={Image}
                  bgImageAlt='guy'
                  strength={200}
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
