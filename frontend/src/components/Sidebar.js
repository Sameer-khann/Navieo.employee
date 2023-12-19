import React from 'react'
// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Sidebar.css'

export default function Sidebar() {

  const scrollTo = () => {
    scroll.scrollTo(1100); // Scrolling to 100px from the top of the page.
  };


  return (
    <>
      <div className="Sidebar">
        <div className="sidebarSection">
            <span className='HeadtextSidebar'>Employee Dashboard</span>
            <span className='textSidebar'>Project details</span>
            <span className='textSidebar'>Team members</span>
            <Link className='textSidebar' to="sectionEmpLogs"offset={-50}  spy={true} smooth={true} duration={500}>Active members</Link> 
            <Link className='textSidebar' to="sectionAllTask"offset={-100}  spy={true} smooth={true} duration={500}>Task assigned</Link>
            <span className='textSidebar'>Task you have assigned</span>
        </div>

      </div>
    </>
  )
}