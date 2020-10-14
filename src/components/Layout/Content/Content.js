import React, { useEffect } from 'react'
import AboutUs from '../../AboutUs/AboutUs'
import ContactUs from '../../ContactUs/ContactUs'
import Fields from '../../Fields/Fields'
import FrontPage from '../../FrontPage/FrontPage'
import RegisterHere from '../../RegisterHere/RegisterHere'
import StudentsRegistered from '../../StudentsRegistered/StudentsRegistered'
const Content = ({page,setPage}) => {
    const HomePage=<>
                    <FrontPage setPage={setPage}/>
                    <StudentsRegistered />
                    <AboutUs />
                    <RegisterHere /> 
                </>
    const College=<Fields />
    const Contact=<ContactUs /> 
    useEffect(()=>{
        if(page==='About'){
            let offsetTop  = document.getElementById('about').offsetTop;
            window.scrollTo({
                top: offsetTop-100, 
                behavior: "smooth"
            });
            setPage('Home')
        }
    })
    return (
        <div>
            {(page==='Home' || page==='About') && HomePage}
            {page==='College' && College}
            {page==='Contact' && Contact}
        </div>
    )
}

export default Content
