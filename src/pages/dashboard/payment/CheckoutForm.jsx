import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxios from '../../../assets/components/hooks/useAxios';
import useCart from '../../../assets/components/hooks/useCart';
import { authContext } from '../../../providers/authProvider';
import Swal from 'sweetalert2';



const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(authContext)
  const [instance] = useAxios()
  const [clientSecret, setClientSecret] = useState('')
  const [cardError, setCardError] = useState('')
  const [paymentId, setPaymentId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [cart, refetch] = useCart()
 console.log(cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0)
  const total2=parseFloat(total).toFixed(2)
  const price =parseFloat(total2)
  
  useEffect(() => {
    if (price > 0) {
      instance.post("/create-payment-intent", { price })
        .then(res => {
          setClientSecret(res.data.clientSecret)
        });
    }
    refetch()
  }, [refetch]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')

    }

    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError)
    }
    // console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setPaymentId(paymentIntent.id)
      const payments = {
        email: user?.email,
        name: user?.displayName,
        date: new Date(),
        quantity: cart?.length,
        Amount: price,
        status: 'pending',
        transactionId: paymentIntent.id,
        menuCartId: cart.map(item => item._id),
        itemId: cart.map(item => item.itemId),
      }
      instance.post('/payments', { payments })
      .then(res => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch()
          }
        })

      {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'payment successful',
          showConfirmButton: false,
          timer: 1500
        })
      }
      setProcessing(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='text-orange-400 font-cinzel font-medium text-lg' type="submit" disabled={!stripe || !clientSecret || processing ||paymentId || cart.length==0}>
          Pay
        </button>
        {cardError && <p className='text-xl text-red-600 font-inter font-normal mt-8'>{cardError}</p>}
        {paymentId && <p className='text-xl text-green-600 font-inter font-normal mt-8'><span>Transaction id: </span>{paymentId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;