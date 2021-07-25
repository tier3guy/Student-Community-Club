export default function Footer(){
  return(
    <>
      <div className = 'Footer'>
        <div className = 'copyRight' style = {{color:'white'}}>Students's Community Club | Open Source Project</div>
        <div>
          <ul className = 'join'>
            <li><a><i className="fab fa-facebook"></i></a></li>
            <li><a><i className="fab fa-linkedin"></i></a></li>
            <li><a><i className="fab fa-instagram"></i></a></li>
            <li><a><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}