import classes from './AboutUs.module.css'
import React from 'react'
import AboutUsLogo from '../../assets/AboutUs.svg'

const AboutUs = () => {
    return (
        <div className={classes.AboutUs} id="about">
            <div className={classes.AboutUsTitle}><span className="red">About</span> Us</div>
            <div className={classes.LogoContainer}>
                <img src={AboutUsLogo} alt="AboutUsLogo"/>
            </div>
            <div>
                <p className={classes.AboutUsText}>Keeping Track Of All Entrance Examination Forms Is One Of The Most Challenging And Complex <br/>
                 Things To Do. Specially The Student Should Be More Focused Towards Preparing For These Exams <br/>
                 Instead Of Just Searching When Which Form Needs To Be Filled.</p>
                 <p className={classes.AboutUsText} style={{marginBottom:'10%'}}>Our Regular Updates Will Help You Keep Track Of Each And Every Form So That You Don't Miss Out <br/>
                  On Even A Single One Of Them. You Will Be Notified Through Email/ Text Sms's About These Forms. <br/>
                  We Will Also Provide You With The Correct URL To Fill The Form So That You Don't Fall Prey To Any <br/>
                  Phishing Site On The Internet.</p>
            </div>
        </div>
    )
}

export default AboutUs
