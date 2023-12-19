import React from 'react'
import "./Footer.css";

import loactionIcon from '../assets/img/icons8-location-96.png'
import phoneIcon from '../assets/img/icons8-phone-96.png'
import mailIcon from '../assets/img/icons8-mail-96.png'

export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="QuickContact">
                    <div className="QucikDetails">
                        <div className="LeftQuick">
                            <h3 className='textHeadingFooter'>QUICK CONTACTS</h3>
                            <div className="ListQuickDetails">
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src={loactionIcon} alt="" />
                                    </div>
                                    <span className="textQuick">
                                        7140 Wehner Tunnel
                                        Washington, D.C
                                    </span>
                                </div>
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src={phoneIcon} alt="" />
                                    </div>
                                    <span className="textQuick">
                                        +9833929292
                                        +9833533290
                                    </span>
                                </div>
                                <div className="addresBox">
                                    <div className="icon">
                                        <img src={mailIcon} alt="" />
                                    </div>
                                    <span className="textQuick">
                                        info@technum.com technum@mail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="RightQuick">
                            <h3 className='textHeadingFooter'>STAY IN TOUCH</h3>
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
                            <span className='textHeadingFooter'>SYC</span>
                        </div>
                        <div className="LogoDisFooter">
                            <span className='LogoDisFooterP'>We have advanced skills & resources to create large-scale solutions as well as guide startups from idea to profit. We a SYC!</span>
                        </div>
                        <div className="socialMedia">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>

                    </div>
                    <div className="serviceFooter">
                        <h2 className='textHeadingFooter'>SERVICES</h2>
                        <span>UI / UX Design</span>
                        <span>Web & App Development</span>
                        <span>OA & Software Testing</span>
                        <span>IT Consulting</span>
                        <span>Product Design</span>

                    </div>
                    <div className="linksFooter">
                        <h2 className='textHeadingFooter'>USEFUL LINKS</h2>
                        <span>About</span>
                        <span>Services</span>
                        <span>Industries</span>
                        <span>Solutions</span>
                        <span>Team</span>

                    </div>
                </div>
            </div>
                <div className='bg-blue-900	 w-full text-center'>All Rights Reserved @ 2023</div>
        </>
    )
}