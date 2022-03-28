import React from 'react';
import Nevber from '../nevber/Nevber';

const Header = () => {
    return (
        <div>
            <Nevber></Nevber>
            <h2 className='text-5xl font-thin text-green-500'>save most of your money </h2>
            <p className='mt-3 font-mono text-2xl'>By giving your money to me !!!</p>
        </div>
    );
};

export default Header;