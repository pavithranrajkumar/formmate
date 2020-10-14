import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../../assets/FooterLogo.svg'
import FbIcon from '../../../assets/social/facebook.svg'
import InstaIcon from '../../../assets/social/instagram.svg'
import TwitterIcon from '../../../assets/social/twitter.svg'

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterContainer}>
                <div className={classes.FooterContainerItems}>
                    <div style={{alignSelf:'center'}}>
                        <img className={classes.FooterLogo} src={Logo} alt="Logo"/>
                    </div>
                    <div className={classes.SocialIcons}>
                        <div><img width="7px" src={FbIcon} alt="FbIcon"/></div>
                        <div><img width="12px" src={InstaIcon} alt="InstaIcon"/></div>
                        <div><img width="10px" src={TwitterIcon} alt="TwitterIcon"/></div>                 
                    </div>
                </div>
                <div className={classes.FooterContainerItems}>
                    <div className={classes.FooterHeadings}>
                        <p>Contact Us</p>
                        <div className={classes.BorderLine}></div>
                    </div>
                    <div className={classes.FooterContents}>
                        <p>J.E Tutorials Educational Services <br/>
                         5/30 Iind Floor Subhash Nagar <br/>
                         9811676838</p>
                        <div className={classes.FooterContents}>
                            <p>info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className={classes.FooterContainerItems}>
                    <div className={classes.FooterHeadings}>
                        <p>Quick Links</p>
                        <div className={classes.BorderLine}></div>
                    </div>
                    <div className={classes.FooterContents}>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>College</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.FooterContainerItems}>
                    <div className={classes.FooterHeadings}>
                        <p>Subscribe</p>
                        <div className={classes.BorderLine}></div>
                    </div>
                    <div style={{alignSelf:'center'}} className={classes.FormContainer}>
                        <input type="text"/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
