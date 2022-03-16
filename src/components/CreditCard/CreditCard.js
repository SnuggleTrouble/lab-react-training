import React from 'react';
import visaImage from './../../assets/images/visa.png';
import MasterCardImage from './../../assets/images/master-card.svg';

export function CreditCard({
  type,
  image,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let colorStyles = { backgroundColor: `${bgColor}`, color: `${color}` };
  if (type === 'Visa') {
    image = visaImage;
  }
  if (type === 'Master Card') {
    image = MasterCardImage;
  }
  return (
    <div className="creditCard" style={colorStyles}>
      <div className='cards'>
        <img className="cardImage" src={image} alt="credit card" />
        <div>
          <p className="cardNumber">
            **** **** **** {number.slice(number.length - 4)}
          </p>
        </div>
        <div>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span className="nameOfBank">{bank}</span>
        </div>
        <p className="cardOwner">{owner}</p>
      </div>
    </div>
  );
}
