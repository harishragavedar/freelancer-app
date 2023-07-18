import React from "react";

const About=()=>{
    const ServicesData = [
        {
          id: 1,
          title: "Copywriting",
          desc: "Just turn down the dilema choosing a field (or) higher studies, get best advises over here in AdvisorHub.",
          cover: "https://img.freepik.com/premium-vector/olinene-library-online-learning-illustration_677179-145.jpg?w=2000",
        },
        {
          id: 2,
          title: "Finance",
          desc: "Multiply your income for a stress free life, live your life luxuries and peaceful life with your loved onces.",
          cover: "https://img.freepik.com/free-vector/money-income-attraction_74855-6573.jpg?w=2000",
        },
        {
          id: 3,
          title: "Tutor",
          desc: "Bring your ideas to life,Build your own empire and improvize your life and live like a KIND (or) QUEEN.",
          cover: "https://img.freepik.com/premium-vector/businessman-man-woman-meeting-office-present-project-analytical-data-statistics-financial-reports-company-financial_142963-675.jpg",
        },
        {
          id: 4,
          title: "SEO",
          desc: "The most precious wealth your have is your Health.Keep you fit and fine with the top health specialist",
          cover: "https://media.istockphoto.com/id/1205779029/vector/doctor-and-patient.jpg?s=612x612&w=0&k=20&c=y5mdyMzBE7jPheVwWyMaNh5u8JDi4_ODpbiTs2sTpzg=",
        },
        {
          id: 5,
          title: "Digital Marketing",
          desc: "The foresee the future your always wanted your patner and career",
          cover:"https://nypost.com/wp-content/uploads/sites/2/2020/01/astrology_web.gif",
        },
        {
            id: 6,
            title: "Attorney",
            desc: "Show you right, keep you and your properties safe from the threats and other thief by all means.",
            cover:"https://img.freepik.com/premium-vector/lawyer-workplace_118813-8665.jpg?w=2000",
        },
      ]
   return(   
    <>
    <section className="services topMarign">
        <div className="conatiner">
            <div className="heading">
                <h2 className="top">Type of Jobs</h2>
                <h1 className="titles">Interactive Jobs </h1>
            </div>
            <div className="contain grid topMargin">
                {
                    ServicesData.map((val)=>{
                        return(
                            <>
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt=''/>
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p className="para">{val.desc}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </> 
    )
}
export default About