import React from 'react';
import Style from './orderCard.module.css';

function OrderCard({ payment }) {
    // Eğer cardNumber varsa render et
    if (!payment || !payment.cardNumber) {
        return null;
    }

    return (
        <div className={Style.paymentMethod}>
            <h2>Payment Method</h2>
            <div className={Style.box}>
                <div className={Style.text}>
                    <h3>Credit Card</h3>
                    <p>{payment.cardNumber}</p>
                </div>
                <div className={Style.editPayment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 17.5H17.5M11.487 4.42643C11.487 4.42643 11.487 5.78861 12.8492 7.1508C14.2114 8.51299 15.5736 8.51299 15.5736 8.51299M6.09969 14.9901L8.96028 14.5814C9.37291 14.5225 9.7553 14.3313 10.05 14.0365L16.9358 7.1508C17.6881 6.39848 17.6881 5.17874 16.9358 4.42642L15.5736 3.06424C14.8213 2.31192 13.6015 2.31192 12.8492 3.06424L5.96347 9.94997C5.66873 10.2447 5.47754 10.6271 5.41859 11.0397L5.00994 13.9003C4.91913 14.536 5.464 15.0809 6.09969 14.9901Z" stroke="#040D08" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
