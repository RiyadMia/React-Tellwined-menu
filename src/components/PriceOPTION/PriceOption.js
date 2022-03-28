import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PriceOption = (props) => {
    console.log(PriceOption)
    const{name,price,benefits}=props.option
    return (
        <div className='p-4 bg-white rounded-lg'>
          <h1 className='py-3 text-xl font-bold bg-indigo-300 rounded '>  {name}</h1>  
          <p>
          <span className='text-5xl font-bold font-extrabold '>{price}</span> 
          <span className='text-xl font-bold text-gray-600'>/mo</span>   
          </p>
          <div>
              <h3 className='text-xl font-bold text-left'>Benefits : </h3>
              
             { 
             benefits.map(benefit =><Benefit benefit={benefit}></Benefit>)
                  }
          </div>
          <button className='flex justify-center w-full p-2 py-2 mt-5 font-bold text-white bg-green-600 rounded hover:text-green-700 '>
              Buy Now <ArrowRightIcon className='w-6 h-6 ml-3 '></ArrowRightIcon>
          </button>
        </div>
    );
};

export default PriceOption;