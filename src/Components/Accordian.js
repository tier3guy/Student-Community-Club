import React, { useState } from 'react';

export default function Accordion(props){

  let [icon,setIcon] = useState(false);
  const toggleAnswer = () => {
    setIcon(!icon);
  }
  const content = props.content;
  console.log(content);
  return( 
    
    <>
      <div id = 'accordItem'>
        <div id = 'question-section'>
          <button 
            id = 'toggle' 
            onClick = {toggleAnswer}>
            <i className = {icon ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
          <h3 id = 'quest'>{props.subject}</h3>
        </div>
        {
         icon ? content.map((curr) => {
           return(
             <div className = "linkAccord"><a href = {curr.link} rel="noreferrer" target = "_blank"><h4>{curr.heading}</h4></a></div>
           );
         }) : ""
        }
      </div>
    </>
  );
}
