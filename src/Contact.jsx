import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="hero-headings">CONTACT</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, illum accusamus quidem harum error corrupti, numquam, facere natus dolore voluptate saepe sit quo nesciunt obcaecati tenetur modi commodi asperiores esse?</p>

            <div className="wrap">
                <div className="card" role="region" aria-label="Contact card">
                
                    <form id="contact-form" novalidate>
                        <div className="field-name">
                            <p className="contact-form-fields">Name*:</p>
                            <input id="name" className="name" type="text" placeholder="ENTER YOUR NAME*" required aria-required="true" />
                            {/* <div class="error" id="nameError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div className="field-email">
                            <p className="contact-form-fields">Email*:</p>
                            <input id="email" className="email" type="email" placeholder="ENTER EMAIL*" required aria-required="true" />
                            {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div className="field-phone">
                            <p className="contact-form-fields">Phone:</p>
                            <input id="phone" className="phone" type="phone" placeholder="PHONE NUMBER" required aria-required="false" />
                            {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div className="field-message">
                            <p className="contact-form-fields">Message*:</p>
                            <input id="message"  type="message" placeholder="YOUR MESSAGE*" required aria-required="true" />
                            {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <button type="submit" className="submit-button">SUBMIT</button>
                    </form>
                </div>        
            </div>
        </section>   
    );
};

export default Contact;