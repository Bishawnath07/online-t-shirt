import React from 'react';
import Cousin from '../Cousic/Cousin';

const Anti = ({ring}) => {

    return (
        <div>
            <h3>Anti</h3>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring} >Nibir</Cousin>
            </section>
        </div>
    );
};

export default Anti;