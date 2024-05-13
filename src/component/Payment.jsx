import React from "react";
import './styles/Payment.css'

function Payment(props) {
    return(
        <div>
            <div  className="payment-section">
                <form className="paymentForm" action="#">
                    <p>Payment Details</p>
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter address" />
                    <input type="text" placeholder="Enter city" />
                    <input type="number" placeholder="Enter phone number" />
                    <div>
                        <p>Select payment method</p>
                        <div className="paymentCard">
                            <label >Card number</label>
                            <input type="number" placeholder="1234 1234 1234 1234"/>
                            
                            <label htmlFor="">Expiration</label>
                            <input type="text" placeholder="MM/YY" />
                            <label htmlFor="">CVC</label>
                            <input type="text" placeholder="CVC" />
                          
                        </div>
                        <div >
                           <button className="momoButton">Pay with MOMO</button>
                        </div>
                    </div>
                    <button className="proceedPayment">Proceed to payment</button>
                </form>
            </div>
        </div>
    )
}


export default Payment;