import React from 'react'
import { HEADER_LINKS } from '../../../constants'
import classes from './Header.module.css'
import Logo from '../../../assets/Logo.png'

const Header = (props) => {
    console.log(props,HEADER_LINKS)
    const Links=HEADER_LINKS.map(link=>
            <div style={{width:'100%'}}>
                <p className={`${classes.HeaderLinkItem} ${props.page===link ? classes.Active : ''}`} 
                    onClick={()=>props.setPage(link)} 
                    style={{marginBlockStart:'0'}}>
                        {link}</p>
            </div>)
    return (
        <div className={classes.Header}>
            <div className={classes.BrandLogo}>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className={classes.HeaderLinks}>
                {Links}
            </div>
        </div>
    )
}

export default Header
