import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import './Payment.css';
const Payment = () => {
    const payment_Key = import.meta.env.VITE_payment_token;
    const stripePromise = loadStripe(payment_Key);
   
    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;