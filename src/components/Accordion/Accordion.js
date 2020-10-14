import React, { useState } from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Up from '../../assets/Up.svg'
import Down from '../../assets/Down.svg'
// Demo styles, see 'Styles' section below for some notes on use.
export default function AccordionComponent(props) {
    const [open,setOpen]=useState(false)
    return (
        <div style={{width:'60%',margin:'auto'}}>
            <Accordion allowMultipleExpanded allowZeroExpanded onChange={()=>setOpen(!open)}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div>{props.name}</div>
                            <div><img src={open ? Up : Down} alt="Acc" /></div> 
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {props.values.map((value,index)=><p>{index+1 +'. '+value}</p>)}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}