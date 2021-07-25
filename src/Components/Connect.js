export default function Connect(){
  return(
    <>
      <div className = 'connect_container'>
        <input placeholder = 'Enter Your Mail ID here' id = 'input'></input>
        <button className = 'btn_primary' style = {{marginLeft: '1em'}}>Submit</button>
        <h3 style = {{marginTop: '2em'}}>Well let me tell you how does this contact me section works, Once you submitted your mail, I will contact you throught that mail ID within 24 hours and after that you have to mail me the pdf of your study material that you want to publish along with your name, branch and college as well so that I can publish your profile in our contributer section.</h3>
      </div>
    </>
  );
}