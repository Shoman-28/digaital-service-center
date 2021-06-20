import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { userContext } from "../../../../App";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";


const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:"17px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const { user } = useContext(userContext);    
  const { id } = useParams();
  const { displayName, email, photoURL } = user;
  const [buyProduct, setBuyProduct] = useState({});
  const { price, name, img, description } = buyProduct;
  const date = new Date();

  useEffect(() => {
    fetch(`https://arcane-refuge-91321.herokuapp.com/buyProduct/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setBuyProduct(data);
        })
        .catch((err) => {
            console.log(err);
        });
  }, [id]);

  const handleSubmit = async event => {
    const paymentDetails = {
            price,
            name,
            img,
            description,
            displayName,
            email,
            photoURL,
            date,
            card:"Visa",
        };
        console.log(paymentDetails)
    fetch("http://localhost:4500/payment", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails)
    })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
      })
      .catch(err=>{
          console.log(err)
      })   




    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit} className="mr-5 p-3" style={{width:"80%", height:"40vh", backgroundColor:"#7b905b78"}}>
        <label className="mr-5">
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label className="mr-5">
          Expiration date
          <CardExpiryElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label className="ml-4">
          CVC
          <CardCvcElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label><br/>
        <Button variant="success" type="submit" disabled={!stripe}>
         ${price} Pay
        </Button>
    </form>
  );
};

export default SplitForm;