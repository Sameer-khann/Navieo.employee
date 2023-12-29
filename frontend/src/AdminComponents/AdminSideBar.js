import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './AdminSideBar.css'

export default function AdminSideBar() {

  const scrollTo = () => {
    scroll.scrollTo(1100); // Scrolling to 100px from the top of the page.
  };


  return (
    <>
      <div className="Sidebar">
        <div className="AdminsidebarSection">
            <span className='AdminHeadtextSidebar'>Admin Dashboard</span>
            <span className='AdmintextSidebar'>Departments</span>
            <span className='AdmintextSidebar'>Team members</span>
            <Link className='AdmintextSidebar' to="AdminsectionEmpLogs"offset={-50}  spy={true} smooth={true} duration={500}>Active members</Link> 
            <Link className='AdmintextSidebar' to="AdminSectionAllTask"offset={-50}  spy={true} smooth={true} duration={500}>Tasks</Link>
            <span className='AdmintextSidebar'>Reports</span>
        </div>

      </div>
    </>
  )
}