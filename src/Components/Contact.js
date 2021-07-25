import Connect from "./Connect";
import Footer from "./Footer";

export default function Contact(){
  return(
    <>
    <div className = 'Contact'>
      <h1>Contact Me</h1>
      <h3 style = {{marginTop: '0.4em'}}>If you have any useful resources that you like to share, you can connect me through your mail ID.</h3>
      <Connect/>
    </div>
    </>
  );
}