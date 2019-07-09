import React from 'react';
import './Hotels.css';

const Hotels = (props) => {
    return (
        <ul className="hotels" >
            {props.hotels.map((hotel) => {
                return (
                    <li className="hotel">
                        <img src={process.env.PUBLIC_URL + "/img/hotels/" + hotel.image} alt={hotel.name} />
                        <h2 className="hotel-name">{hotel.name}</h2>
                        <p className="stars">{hotel.stars} Stars</p>
                        <p className="price">${hotel.price}</p>
                        <h3>Amenities</h3>
                        <ul>
                            {hotel.amenities.map(amenity => <li className="amenity">{amenity}</li>  )}
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
}
 
export default Hotels;