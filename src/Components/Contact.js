import Connect from "./Connect";

export default function Contact(){
  return(
    <>
    <div className = 'Contact'>
      <h1 style = {{fontSize:'3em'}}>Share Material</h1>
      <h3>If you have any useful study material that you like to share, you can connect me through your mail ID.</h3>
      <Connect/>
    </div>
    </>
  );
}