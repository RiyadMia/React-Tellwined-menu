import React from 'react';
import PriceOption from '../PriceOPTION/PriceOption';
const Priceing = () => {
const priceingOptions =[
    {id: 1,name: 'Free', price: 0,
    benefits:[
        'lifetime free',
        'unlimited deals',
        'localized dals ',
        'famtastic deals',
        'crazy deals'
    ]
},
    {id: 2,name: 'Regular', price: 9.99,
    benefits:[
        'lifetime regular',
        'unlimited deals',
        'localized dals ',
        'famtastic deals',
        'crazy deals'
    ]
},
    {id: 3,name: 'Premium', price: 19.99,
    benefits:[
        'lifetime premime',
        'unlimited deals',
        'localized dals ',
        'famtastic deals',
        'crazy deals'
    ]},
]
    return (
        <div className='p-5 mt-8 bg-indigo-300'>
            <h1 className='font-mono text-6xl text-white '>Best Deals of the Town </h1>
            <p className='font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reiciendis libero maiores cupiditate doloribus error rem repudiandae non ipsa minima? </p>
            <div className='grid gap-3 mt-8 md:grid-cols-3'>
                {
               priceingOptions.map(
              option => <PriceOption
              key ={option.id}
              option={option}
              ></PriceOption>
              )
                }
            </div>
        </div>
    );
};

export default Priceing;