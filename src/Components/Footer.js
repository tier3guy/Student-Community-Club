export default function Footer(){
  return(
    <>
      <div className = 'Footer'>
        <div className = 'copyRight' style = {{color:'white'}}>Students's Community Club | An Open Source Project</div>
        <div>
          <ul className = 'join'>
            <li><a href = 'https://www.facebook.com/profile.php?id=100042540223986' target = '_blank'><i className="fab fa-facebook"></i></a></li>
            <li><a href = 'https://www.linkedin.com/in/avinash-gupta-3321041ba/' target = '_blank'><i className="fab fa-linkedin"></i></a></li>
            <li><a href = 'https://www.instagram.com/gupta_g_62/' target = '_blank'><i className="fab fa-instagram"></i></a></li>
            <li><a href = 'https://www.youtube.com/channel/UCwxisguWu-DSj-i0fSc1L1g' target = '_blank'><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}