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
      <div className='cards'>
    <div className="creditCard" style={colorStyles}>
        <img className="cardImage" src={image} alt="credit card" />
      <div className="cardNumber">
        <p>**** **** **** {number.slice(number.length - 4)}</p>
      </div>
      <div className="cardInfo">
        <span>
          Expires {expirationMonth}/{expirationYear} {bank}
        </span>
        <p className="cardOwner">{owner}</p>
      </div>
    </div>
    </div>
  );
}
