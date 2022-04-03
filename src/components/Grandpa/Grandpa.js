import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, sethouse] = useState(1);
    const handleByeHouse = () => {
        const newHouseCount = house + 1;
        sethouse(newHouseCount);
    }

    const ornament = 'Daimond Ring';

    return (
        <RingContext.Provider value={house}>
            <div className='grandpa '>
                <h4>GrandPa: </h4>
                <p>house: {house}</p>
                <button onClick={handleByeHouse}>Buy a House</button>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;