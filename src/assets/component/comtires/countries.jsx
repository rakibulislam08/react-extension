import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const country = use(countriesPromise);
    const countryData = country.countries
    console.log(countryData);
    
    // console.log(country);
    return (
        <div>
            <h4>Country : {countries.length}</h4>
        </div>
    );
};

export default Countries;