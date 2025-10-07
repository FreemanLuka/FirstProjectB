import React from "react";
// import logo1 from "./Images/logo1.png";
// import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
// import  { MdAlternateEmail } from "react-icons/md"; // email icon

const Contact = () => {
    return (
        <section id="contact" className="contact">

            <div class="wrap">
                <div class="card" role="region" aria-label="Contact card">
                
                    <form id="contactForm" novalidate>
                        <div class="field">
                        
                        <input id="name" name="name" type="text" placeholder="ENTER YOUR NAME" required aria-required="true" />
                        {/* <div class="error" id="nameError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div class="field">
                        <input id="email" name="email" type="email" placeholder="ENTER EMAIL" required aria-required="true" />
                        {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div class="field">
                        <input id="email" name="email" type="email" placeholder="PHONE NUMBER" required aria-required="true" />
                        {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div class="field">
                        <input id="email"  type="email" placeholder="MESSAGE US" required aria-required="true" />
                        {/* <div class="error" id="emailError" aria-live="polite" style="display:none"></div> */}
                        </div>

                        <div>
                        <button> SUBMIT </button>
                        </div>
                    </form>
                </div>        
            </div>
        </section>   
    );
};

export default Contact;