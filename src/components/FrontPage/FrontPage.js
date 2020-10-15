import React, { useEffect, useState } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

import classes from './FrontPage.module.css'
import BannerLogo from '../../assets/Banner.svg'

const texts=['Text','SMS']
const dates=['Start Date','End Date','URL']

const fontStyle={
    font: 'normal normal 300 55px/103px Poppins',
    letterSpacing: '0px',
    color: '#E64560',
    opacity: '1',
    margin: "15px 10px"
}
const FrontPage = ({setPage}) => {
    const [state, setState] = useState(0)
    // useEffect(()=>{
    //     setInterval(() => {
    //         setState(state+1);
    //     }, 4000);
    // })
    return (
        <div className={classes.FrontPage}>
            <div className={classes.FrontPageTitle}>
                <span className={classes.TitleRed}>Tracking</span> 
                <span className={classes.TitleBlack}> College Admission <br/> Forms</span> 
                <span className={classes.TitleRed}> Made Easy.</span>
            </div>
            <div className={classes.FrontPageSubTitle}>
                <span className={classes.FrontPageSubTitle}>Get Notified Through
                     <span>
                     <ReactTextTransition
                            text={texts[state % texts.length]}
                            spring={presets.gentle}
                            style={fontStyle}
                            inline
                        />
                     </span> 
                     About 
                     <span>
                        <ReactTextTransition
                            text={dates[state % texts.length]}
                            spring={presets.gentle}
                            style={fontStyle}
                            inline
                        />
                    </span> To Fill The Form</span>
            </div>
            <div className={classes.FrontPageButtons}>
                <button className="btn-primary">Subscribe</button>
                <button className="btn-secondary" onClick={()=>setPage('College')}>College List</button>
            </div>
            <div className={classes.Banner + " text-center"}>
                 <img src={BannerLogo} alt="Banner" style={{width:'1000px'}}/>
            </div>
        </div>
    )
}

export default FrontPage
