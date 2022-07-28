import { useState } from 'react';
import { AccordionData } from '../../types'
import AccordionItem from './AccordionItem';
import './Accordion.css';

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <div className='TermsAndConditions_Accordion'>
      <div>
   
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
    </div>
    
    <div className="style-image_Yourprofile" style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/953/270/HD-wallpaper-gifts-boxes-ribbons-red-black.jpg)`}}>
            <p className="change_Yourprofile">
             
                Changing<br/>
                Moments<br/>
                into <br/>
                Beautiful
                <p className="mem_color_Yourprofile">Memories</p>
                <p className="sub_mem1_Yourprofile">Gifts.Experiences.Unique</p>
                <p className="sub_mem_Yourprofile">Surprises.Events.Weddings.Other</p>
                <p className="sub_mem_Yourprofile">Services Corporate. many more</p>
                </p>
                <br/>
                <a href="https://www.sulekha.com/memories-unlimited-madhapur-hyderabad-contact-address">
                <button className="redirect_Yourprofile">Explore memories</button>
                </a>
          </div>
    </div>
  );
}

export default Accordion;