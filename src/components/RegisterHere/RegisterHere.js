import React from 'react'
import classes from './RegisterHere.module.css'
import RegisterHereLogo from '../../assets/RegisterHere.svg'
import MedicalLogo from '../../assets/Medical.svg'
import NonMedicalLogo from '../../assets/NonMedical.svg'
import Arts from '../../assets/report.svg'


const RegisterHere = () => {
    return (
        <div className={classes.RegisterHere}> 
          <div className={classes.RegisterHereTitle}>
              <div className={classes.shadowText}><span className="red">Register</span> Here</div>
              <span className="red">Register</span> Here
          </div>    
          <div className={classes.FormContainer}>
                <div style={{textAlign:'end',marginTop:'100px'}} className={classes.RegistrationFormLogo}>
                    <img src={RegisterHereLogo} alt="RegisterHere"/>
                </div>
                <div>
                    <div style={{textAlignLast:'right'}}>
                        <p className={classes.OutlinedText}>Form</p>
                    </div>
                    <div>
                         <p className={classes.FormSubText}>Select The Stream You Want To Receive Notifications For ?</p>
                    </div>
                    <div className={classes.RegistrationForm}>
                        <form action="">
                            <div className="flex">
                                <div className={classes.RadioBox}>
                                    <div className="text-right">
                                        <label>
                                            <div className="radio-container">
                                                <input type="checkbox" name="medical" id="medical"/>
                                                <span class="checkmark"></span>
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <img src={MedicalLogo} alt="MedLogo" style={{width:'90px'}}/>
                                            </div>
                                            <div className={classes.RadioText}>Medical (Rs.200)</div>
                                        </label>
                                    </div>   
                                </div>
                                <div className={classes.RadioBox}>
                                    <div className="text-right">
                                        <label>
                                            <div className="radio-container">
                                                <input type="checkbox" name="nonmedical" id="nonmedical"/>
                                                <span class="checkmark"></span>
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <img src={NonMedicalLogo} alt="NonMedLogo" style={{width:'94px'}}/>
                                            </div>
                                            <div className={classes.RadioText}>Non-Medical (Rs.100)</div>
                                        </label>
                                    </div>  
                                </div>
                                <div className={classes.RadioBox}>
                                    <div className="text-right">
                                        <label>
                                            <div className="radio-container">
                                                <input type="checkbox" name="arts" id="arts"/>
                                                <span class="checkmark"></span>
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <img src={Arts} alt="ArtsLogo" style={{width:'86px'}}/>
                                            </div>
                                            <div className={classes.RadioText}>Arts (Rs.100)</div>
                                        </label>
                                    </div> 
                                </div>
                            </div>
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
                                <label htmlFor="schoolName"><span className={classes.RegistrationFormLabel}>School Name</span><br/>
                                <input type="text" name="schoolName" id="schoolName"/>
                                </label>
                            </div>
                            <div className={classes.FormControl}>
                                <label htmlFor="paytmNo"><span className={classes.RegistrationFormLabel}>Paytm No</span><br/>
                                <input type="text" name="paytmNo" id="paytmNo"/>
                                </label>
                            </div>
                            <div className={classes.FormControl} style={{display:'flex',justifyContent:'space-between'}}>
                                <span className={classes.FormControlCurrency}>Rs.100</span>
                                <button type="submit" className="btn-primary">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
          </div>   
        </div>
    )
}

export default RegisterHere
