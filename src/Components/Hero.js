import logo from '../Assets/logo_main.svg';

export default function Hero(){
  return(
    <>
      <div className = 'hero'>
        <div className = 'hero_img'>
          <img src = {logo}/>
        </div>
        <div className = 'welcome_text'>
          <div><h1>Hi! folk, welcome in our community. This is your one way solution that will make your campus life even more easier and simpler ..</h1></div>
          <div><button className = 'btn_primary'>Learn More about us</button></div>
        </div>
      </div>
    </>
  );
}