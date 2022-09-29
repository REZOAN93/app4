import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [Countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setCountries(json))
    },[])
    return (
        <div>
            <h1>Country List : {Countries.length}</h1>
            <div className='Countries-style'>
                {

                    Countries.map(cd=><Country countries={cd}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;