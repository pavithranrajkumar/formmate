import React, { useState } from 'react'
import classes from './Fields.module.css'
import Banner from '../../assets/CollegeBanner.svg'
import AccordionData from '../../FORMS.json' 
import AccordionComponent from '../Accordion/Accordion'

const Fields = () => {
    const [field, setField] = useState('Medical')
    const data=AccordionData[field]
    const processedData=Object.entries(data).map(item=><AccordionComponent name={item[0]} values={Object.values(item[1])} />)
    return (
        <div className={classes.Fields}>
            <div className={classes.FieldsTitle}>
                <span className={classes.TitleRed}>An Investment In</span> 
                <span className={classes.TitleBlack}> Knowledge Always <br/> Pays</span> 
                <span className={classes.TitleRed}> The Best Interest.</span>
            </div>
            <div className={classes.Banner + " text-center"}>
                 <img src={Banner} alt="Banner" style={{width:'1000px'}}/>
            </div>
            <div className={classes.FieldsButtons}>
                <button className={field==='Medical' ? "btn-primary" : "btn-secondary"} onClick={()=>setField('Medical')}>Medical</button>
                <button className={field==='Non-Medical' ? "btn-primary" : "btn-secondary"} onClick={()=>setField('Non-Medical')}>Non Medical</button>
                <button className={field==='Arts' ? "btn-primary" : "btn-secondary"} onClick={()=>setField('Arts')}>Arts</button>
            </div>
            {processedData}
        </div>
    )
}

export default Fields
