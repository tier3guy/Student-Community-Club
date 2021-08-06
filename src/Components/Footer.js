export default function Footer(){
  return(
    <>
      <div className = 'Footer'>
        <div className = 'copyRight' style = {{color:'white'}}>Students's Community Club | <a rel="noreferrer" style = {{color:'white'}} href = "https://github.com/tier3guy/Student-Community-Club" target = "_blank">An Open Source Project</a></div>
        <div>
          <ul className = 'join'>
            <li><a rel = "noreferrer" href = 'https://www.facebook.com/profile.php?id=100042540223986' target = '_blank'><i className="fab fa-facebook"></i></a></li>
            <li><a rel = "noreferrer" href = 'https://www.linkedin.com/in/avinash-gupta-3321041ba/' target = '_blank'><i className="fab fa-linkedin"></i></a></li>
            <li><a rel = "noreferrer" href = 'https://www.instagram.com/gupta_g_62/' target = '_blank'><i className="fab fa-instagram"></i></a></li>
            <li><a rel = "noreferrer" href = 'https://www.youtube.com/channel/UCwxisguWu-DSj-i0fSc1L1g' target = '_blank'><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
