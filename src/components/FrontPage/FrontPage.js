import React from 'react'
import classes from './FrontPage.module.css'
import BannerLogo from '../../assets/Banner.svg'
const FrontPage = ({setPage}) => {
    return (
        <div className={classes.FrontPage}>
            <div className={classes.FrontPageTitle}>
                <span className={classes.TitleRed}>Tracking</span> 
                <span className={classes.TitleBlack}> College Admission <br/> Forms</span> 
                <span className={classes.TitleRed}> Made Easy.</span>
            </div>
            <div className={classes.FrontPageSubTitle}>
                <span className={classes.FrontPageSubTitle}>Get Notified Through <span>
                    <h1 class="tlt">My Title</h1>
               </span> About <span>StartDate</span> To Fill The Form</span>
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
