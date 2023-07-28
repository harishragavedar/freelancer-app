import React from "react";
import './Home.js';


const Home=()=>{
    return(
        <>
        <section className="home
        ">
            <div className="home-container">
                <div className="img-container">
                    <div className="img">
                        <img src="https://images.squarespace-cdn.com/content/v1/5343d585e4b077ee2eda39ff/1590463143181-DSBDSZMGDG936459WKI1/sketchpost-digital-graphic-recording-infographic-video-singapore-malaysia-hong-kong.jpg" className="imgback"/>
                    </div>
                </div>
                <div className='data-container'>
                   <h1> FREELANCER HUB </h1>
                    <div className='socialIcon'>
                   <a href="https://www.facebook.com/"><i className='fab fa-facebook-f facebook'></i></a>
                    <a href="https://www.instagram.com/r.a.g.a.a_/"><i className='fab fa-instagram instagram'></i></a>
                    <a href="https://twitter.com/home"><i className='fab fa-twitter twitter'></i></a>
                    </div>
                    <p>
                       It's the job of a freelancer to be the EYES and EARS for ideal growth in your life,CLARITY IN YOUR VISIONARY MAKES THE IMPOSSIBLE TO BE YOUR POSSIBILITY...!!!
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;