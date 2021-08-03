import Footer from "./Footer";
import Material from "./Material";
import NavSecondary from "./Nav_secondary";

export default function Resources(){
  return(
    <>
    <NavSecondary/>
    <div className = 'app' style = {{minHeight:'85vh' , paddingTop: '6em'}}>
      <h2 className = "mb">Notice : </h2>
      <h3 className = "mb">Right now our community is small, so we don't have much resources, I am sharing mine study material and thats the materials are only IT field specific but also I talking to my connections and trying to bring more material for other branches as well. </h3>
      <p className = "mb">This site is all about community helping community, so please do share yours material as well.</p>
      <Material/>
    </div>
    <Footer/>
    </>
  );
}