import React from 'react'
import Footer from './Footer';

import { FaHandPointRight } from 'react-icons/Fa';
const Refund = () => {
    return (
      <div id='refund' className="container refund  text-light text-justify mt-5" >    
          <a href="/" className='Back_btn m-3' >Home</a>

            <h1 className='display-4 text-center mb-5' >REFUND & CANCELLATION POLICY</h1>
            <p> 
              <FaHandPointRight className='me-5'/>Refund will be considered only if customer mail us at services@grsystems.co.in within 2 hour of payment. No refund shall be entertained after expiry of two hour from the time of payment.
            </p>
            <p> 
              <FaHandPointRight className='me-5'/>No refund shall be made if data provided by customer is incorrect. However, if customer mail us within an hour of ordering the report, we will consider the changes to be made.
            </p>
            <p> 
              <FaHandPointRight className='me-5'/>Once the report is delivered to customer, no refund shall be made.
            </p>
            <p> 
              <FaHandPointRight className='me-5'/>All eligible refunds shall be made within seven business days from the date of receipt of request. However, the same is subject to transaction and processing time taken by bank/payment gateway.
            </p>
            <p> 
              <FaHandPointRight className='me-5'/>In case of double payment made by mistake against the single order, one payment will be refunded.
            </p>
            <p> 
              <FaHandPointRight className='me-5'/>In case of double payment made by mistake against the single order, one payment will be refunded.
            </p>
            <hr className='mt-5'/>
      <Footer/>
        
      </div>
      )
    }
    
    export default Refund