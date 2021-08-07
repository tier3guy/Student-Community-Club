import { useState } from "react";
import {db} from './Firebase';

export default function Connect(){

  const [email,setEmail] = useState('');
  const [name,setName] = useState('');

  function getMail(e){
    setEmail(e.target.value);
  }

  function getName(e){
    setName(e.target.value);
  }

  function updateData(e){
    e.preventDefault();

    if(email === "" || name === ""){
      alert("Please fill the necessary fields");
    }
    else{
      db.collection('Contributers').add({
        name: name,
        Email: email,
      }).then(() => {
        alert('Mail ID submitted, You will contacted within 24 hours !')
      }).catch((error) => {
        alert(error.message);
      });
  
      setEmail('');
      setName('');
    }
    
  }


  return(
    <>
    <form onSubmit = {updateData}>
    <div className = 'connect_container'>
    <input placeholder = 'Enter Your Mail ID Here' 
           className = 'input' 
           type = 'email' 
           id = 'emailSection'
           onChange = {getMail}
           value = {email}></input>
    <br/>
    <input placeholder = 'Enter Your Full Name Here' 
           className = 'input' 
           id = 'nameSection'
           onChange = {getName}
           value = {name}></input>
    <br/>
    <button type = 'submit' className = 'btn_primary submitbtn' style = {{marginTop: '1em'}}>Submit</button>
    <h3 style = {{marginTop: '2em' , lineHeight:'1.7em'}}>Well let me tell you how does this CONTACT ME section works, Once you submitted your mail, I will contact you throught that mail ID within 24 hours and after that you have to mail me the pdf of your study material that you want to publish along with your branch and college, so that I can publish your profile in our contributers section.</h3>
    </div>
    </form>

    </>
  );

}