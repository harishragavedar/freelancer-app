import React from "react";
import './streams.css';

const Streams=()=>
{
    const data=[
        {
            id:'01',
            heading:'Freelancers',
            desc:"We provide you with the best advisors you need with years of expercience! We are at your service anytime your in need."
        },
        {
            id:'02',
            heading:'Reservations',
            desc:"we will help your in linking your and the freelancers according to the reservation you have placed."
        },
        {
            id:'03',
            heading:'Result Analysis',
            desc:"Here we provide you with a detailed description about what u need and what to be improvised."
        }
    ]
    return(
        <>
        <section className='stream'>
            <div><h1>Welcome user!</h1></div>
            <div className="container grid">
                {data .map((value) =>{
                    return(  
                        <div className="box flex">   
                              <div className='text'>
                              <h1>{value.id}</h1>
                           </div>
                           <div className='para'>
                            <h2>{value.heading}</h2>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    </>
    )
}
export default Streams;