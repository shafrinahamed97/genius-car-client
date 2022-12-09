import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={parts} alt="" className=" absolute w-3/5 right-3 border-8 top-2/4 rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl font-bold  text-orange-600'>About Us</p>
      <h1 className="text-5xl font-bold my-5">We are qualified <br /> & of experience <br /> in this field </h1>
      <p className="py-6">There Are Many Variations of Passages of Lorem ipsum <br />Available, But The Majority
       Have suffered Alteration <br />
      In Some From, By Injected Humor, Or Randomised Words Which Don't 
      Look Even Slightly Believable.</p>
      <p className='py-6'>The Majority Have Suffered Alteration In Some Form, By Injected <br />
      Humour, Or Randomised Words Which Don't Look Even Slightly <br />Believable</p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;