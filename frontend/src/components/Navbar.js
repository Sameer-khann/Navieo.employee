import "./Navbar.css";
import {Component} from "react";
import { FaMessage } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import NavieoLogo from '../assets/img/logo.jpeg';
import {Link} from "react-router-dom"

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return (
        <>
            <nav>
                <img className="Navimglogo" src={NavieoLogo} alt="Logo"></img>
                <div>
                    <ul id="navbar" className={this.state.clicked?"#navbar active" : "#navbar"}>
                        <li><a href="#"><FaInfo/></a></li>
                        <li><a href="#"><FaMessage/></a></li>
                        <li><a href="#"><FaRegBell/></a></li>
                        <li><a href="#"><FaRegUser/></a></li>
                        <Link to="/Admin">
                        <li><a>Admin</a></li>
                        </Link> 
                        <Link to="/">
                        <li><a>Empolyee</a></li>
                        </Link>

                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}
}

export default Navbar;