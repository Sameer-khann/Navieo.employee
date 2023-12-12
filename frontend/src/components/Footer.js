import React from 'react'
import "./Footer.css";

// import icon from '../img/icons8-location-96.png'
// import icon1 from '../img/icons8-phone-96.png'
// import icon2 from '../img/icons8-at-sign-96.png'

export default function Footer() {
    return (    
        <>
            <div className="Footer">
                <div className="QuickContact">
                    <div className="QucikDetails">
                        <div className="LeftQuick">
                            <h3>QUICK CONTACTS</h3>
                            <div className="ListQuickDetails">
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src="" alt="" />
                                    </div>
                                    <span className="textQuick">
                                        7140 Wehner Tunnel
                                        Washington, D.C
                                    </span>
                                </div>
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src="" alt="" />
                                    </div>
                                    <span className="textQuick">
                                        +9833929292
                                        +9833533290
                                    </span>
                                </div>
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src="" alt="" />
                                    </div>
                                    <span className="textQuick">
                                        info@technum.com technum@mail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="RightQuick">
                            <h3>STAY IN TOUCH</h3>
                            <div className="inputSearch">
                                <input type="text" placeholder='Email address' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FooterSec">
                    <div className="logoSecFooter">
                        <div className="logo">
                            {/* <img src="" alt="" /> */}
                            <h1>YOURDEVELOPER01</h1>
                        </div>
                        <div className="LogoDisFooter">
                            <span className='LogoDisFooterP'>We have advanced skills & resources to create large-scale solutions as well as guide startups from idea to profit. We a TechnUm!</span>
                        </div>
                        <div className="socialMedia">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>

                    </div>
                    <div className="serviceFooter">
                        <h2>SERVICES</h2>
                        <span>UI / UX Design</span>
                        <span>Web & App Development</span>
                        <span>OA & Software Testing</span>
                        <span>IT Consulting</span>
                        <span>Product Design</span>

                    </div>
                    <div className="linksFooter">
                        <h2>USEFUL LINKS</h2>
                        <span>About</span>
                        <span>Services</span>
                        <span>Industries</span>
                        <span>Solutions</span>
                        <span>Team</span>

                    </div>
                </div>
            </div>
        </>
    )
}