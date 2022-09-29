import React from 'react';

const Country = (props) => {
    const{name,capital,flags,continents}=props.countries;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <h4>{capital}</h4>
            <img src={flags.png} alt="" />
            <p><small>{continents}</small></p>
        </div>
    );
};

export default Country;