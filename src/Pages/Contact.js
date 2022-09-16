import React from "react";
import './Contact.css';
import Button from '../Button/Button'
import { FiArrowUpRight } from 'react-icons/fi'


function Contact(){
    return (
        <>
            <main className="contact">
                <h1 style={{color:'white',textAlign:'center',paddingTop:"30px"}}>CONTACT ME</h1>
            <div className="contact-wrapper">
            <form>
                <p>First name*</p>
                <input type="text" name="" id="" required placeholder="First name"/>
                <p>Last name*</p>
                <input type="text" name="" id="" required placeholder="Last name"/>
                <p>Email*</p>
                <input type="email" name="" id="" required placeholder="Email"/>
                <p>Message*</p>
                <textarea  name="" id="" required placeholder="your message"></textarea>
               <Button title="SUBMIT" btnIcon={<FiArrowUpRight />} onhandleClick={(e)=>e.preventDefault()} customClass="custom-btn-2"/>
            </form>
        </div>
        </main>
        </>
    )
}

export default Contact;