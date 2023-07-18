import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';
import React,{useState} from "react";
import { Link } from "react-router-dom";


const Header =()=>
{
    const [sidebar,setSidebar]=useState(false)

    window.addEventListener("scroll",function(){
        const header = document.querySelector("header")
        header.classList.toggle("active",window.screenY > 200)
    })

    return(
        <header className='header'>
            <div className='container flex'>
               <div className='logo1'>
                LANCER
                    {/* <img src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/5837/brand.gif?itok=ZA-Ta53O' alt=''/> */}
                </div> 
                <div className="nav">
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={()=> setSidebar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/user'>User</Link></li>
                        <li><Link to='/advisor'>Freelancer</Link></li>
                        <li><Link to='/streams'>Streams</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/membership'>Membership</Link></li>
                        <li className='icon'>
                            <ImageSearchRoundedIcon className='HeaderIcon'/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header