import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle';
import Anti from '../Anty/Anti';
import './Grandpa.css'

export const RingContext = createContext('gold')
export const MoneyContext = createContext (0)

const Grandpa = () => {
    const ring = 'diomond';
    const [money , setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p><small>Has Money : {money}</small></p>
           <MoneyContext.Provider value={[money, setMoney]}>
           <RingContext.Provider value='golden Ring'>
           <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Anti ring={ring}></Anti>
            </section>
           </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;