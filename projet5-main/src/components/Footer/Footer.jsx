import React from 'react'
import "./Footer.scss";
import logoFooter from "../../assets/footer.png";
function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logoFooter} alt='logo footer Kasa'/>
        </div>
        <div className='footer_text'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer;