import React from 'react'
import classes from './ContactUs.module.css'
import ContactUsLogo from '../../assets/ContactUs.svg'


const ContactUs = () => {
    return (
        <div className={classes.RegisterHere}> 
          <div className={classes.FormContainer}>
                <div style={{textAlign:'end',marginTop:'50px'}} className={classes.RegistrationFormLogo}>
                    <img src={ContactUsLogo} alt="Contact Us"/>
                </div>
                <div>
                    <div style={{textAlignLast:'right'}}>
                        <p className={classes.OutlinedText}>Form</p>
                    </div>
                    <div className={classes.RegistrationForm}>
                        <form action="">
                            <div className={classes.FormControl}>
                                <label htmlFor="name"><span className={classes.RegistrationFormLabel}>Name</span><br/>
                                <input type="text" name="name" id="name"/>
                                </label>
                            </div>
                            <div className={classes.FormControl}>
                                <label htmlFor="email"><span className={classes.RegistrationFormLabel}>Email</span><br/>
                                <input type="text" name="email" id="email"/>
                                </label>
                            </div>
                            <div className={classes.FormControl}>
                                <label htmlFor="phone"><span className={classes.RegistrationFormLabel}>Phone No</span><br/>
                                <input type="text" name="phone" id="phone"/>
                                </label>
                            </div>
                            <div className={classes.FormControl}>
                                <label htmlFor="message"><span className={classes.RegistrationFormLabel}>Message</span><br/>
                                <textarea rows="5" name="message" id="message"/>
                                </label>
                            </div>
                            <div className={classes.FormControl} style={{display:'flex',justifyContent:'space-between'}}>
                                <span></span>
                                <button type="submit" className="btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
          </div>   
        </div>
    )
}

export default ContactUs
