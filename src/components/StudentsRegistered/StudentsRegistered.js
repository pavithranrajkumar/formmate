import React from 'react'
import classes from './StudentsRegistered.module.css'
const StudentsRegistered = () => {
    return (
        <div className={classes.StudentsRegistered}>
            <div className={classes.StudentsRegisteredTitle}>
                <div className={classes.shadowText}>
                    <span>Students <span style={{color:'#ffffff'}}>Registered</span> </span>
                </div>
                <span>Students <span style={{color:'#ffffff',font:'normal normal 400 45px/71px Poppins'}}>Registered</span> </span>
            </div>
            <div className={classes.StudentsRegisteredContainer}>
                <div>
                    <span className={classes.StudentsRegisteredNumbers}>100</span><br/>
                    <span className={classes.StudentsRegisteredText}>Medical</span>
                </div>
                <div>
                    <span className={classes.StudentsRegisteredNumbers}>100</span><br/>
                    <span className={classes.StudentsRegisteredText}>Medical</span>
                </div>
                <div>
                    <span className={classes.StudentsRegisteredNumbers}>100</span><br/>
                    <span className={classes.StudentsRegisteredText}>Medical</span>
                </div>
            </div>
        </div>
    )
}

export default StudentsRegistered
