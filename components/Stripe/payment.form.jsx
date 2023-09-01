import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { Button } from 'semantic-ui-react';
import styles from '../../styles/checkout-wishlist.module.css'


export const PaymentFormComponent = ({ currentUser, orderTotal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        setPaymentError(null);

        const response = await fetch('/api/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: orderTotal * 100 }),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            setPaymentError(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }
    };

    return (
            <div className={styles.PaymentFormContainerr}>
                <form className={styles.FormContainerr} onSubmit={paymentHandler}>
                    <div className={styles.CardHeader}>Credit Card Payment:</div>
                    <div className={styles.StyledCardElement}>
                        <CardElement />
                    </div>
                    {paymentError && <div className={styles.ErrorMessage}>{paymentError}</div>}
                    <div className={styles.buttcontainer}>
                        <Button className={styles.movetocollections}
                            type="submit"
                            disabled={isProcessingPayment}
                        >
                            Pay Now
                        </Button>
                    </div>
                </form>
            </div>
    );
};