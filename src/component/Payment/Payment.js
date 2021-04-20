import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeMUWJGf7fXr1M7XVX5D81rPOz3s02wdux2Dw3TXIeUhLXOkgJdWSEIxIHeA0ruWgZddte083bfmfFAdzOykKek00QobmeD0j');

const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment = {handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default Payment;