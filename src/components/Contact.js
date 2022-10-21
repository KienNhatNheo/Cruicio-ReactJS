import React from "react";
import "../css/Contact.css";



export default function Contact(){
    return (
        <>
            <div id="contact" className="service">
			<div className="service-header">CONTACT</div>
			<div className="service-hr"></div>
			<div className="contact-info">
				<div className="contact-item">
					<div className="contact-name">ADDRESS</div>
					<div className="contact-content">123 Street, New York (USA)</div>
				</div>
				<div className="contact-item">
					<div className="contact-name">PHONE</div>
					<div className="contact-content">+123 456 789</div>
				</div>
				<div className="contact-item">
					<div className="contact-name">EMAIL</div>
					<div className="contact-content purple">info@myemail.com</div>
				</div>
			</div>
			<div className="contact-form">
					<form>
						<input type="text" name="" placeholder="Name*"/>
						<input type="email" name="" placeholder="Email*"/>
					</form>
			</div>
			<textarea cols="3" className="contact-mess" placeholder="Message"></textarea>
			<div className="contact-button">SEND</div>
		</div>
        </>
        );   
}