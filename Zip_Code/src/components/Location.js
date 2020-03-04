import React, { useState } from 'react'
import Axios from 'axios';

const Location = () => {
    var zipCode = ''
    const [input, setInput] = useState('')
    const [location, setLocation] = useState([])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    if (input.length === 5) {
        Axios.get(`https://www.wsjwine.com/api/address/zipcode/${input}`)
            .then(item => setLocation(item.data))
            .catch(error => console.log(error))
        setInput('')
    }

    if (location.length != 0) {
        zipCode = <h1>{location.response.city}, {location.response.stateName}</h1>
    }

    return (
        <div className="location">
            {zipCode}
            <div className="zip">
                <label htmlFor="zipcode" id="zipInput"> Zip Code:</label>
                <input type="text" value={input} name="zipcode" onChange={handleChange} />
            </div>
        </div>
    )
}

export default Location