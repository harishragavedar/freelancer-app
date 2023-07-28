import React from "react";

const Service = () => {
    const data = [
        {
            title: "About Us",
            desc1: "The Municipal Advisor Rule (MA Rule) approved by the Securities and Exchange Commission (SEC) went into effect on July 1, 2014. The MA Rule regulates municipal advisors by establishing registration requirements as well as placing a fiduciary duty on those professionals that advise governments on bonds. Further, the MA Rule mandates that professionals that provide advice on the sale of bonds or investment of bond proceeds maintain a fiduciary duty to their clients. Professionals that do not have a fiduciary duty to the client may only provide advice pursuant to an exemption or exception.",
            desc2: "There are exemptions that allow finance professionals to furnish advice to municipal issuers without acting as a fiduciary. An underwriter may also provide recommendations in response to a request for proposal (RFP) or a request for qualifications (RFQ). An RFP or RFQ must be current – not outstanding longer than six months – and either distributed to at least three competitive firms or posted publicly. An underwriter may provide advice to an issuer where the issuer has retained an independent registered municipal advisor (IRMA), and the issuer states in writing to the underwriter that it will rely on the IRMA’s advice. As the MA Rule generally only regulates municipal advisors and underwriters, its provisions do not apply to other market participants that offer advice, such as elected or appointed officials acting in their official capacity or citizens contributing to public discourse. Underwriters may also be exempted if they are a dual employee of an underwriting firm and a banking institution and provide advice in their capacity as a bank employee to a municipal issuer.",
            desc3: "There are a number of exclusions to the MA Rule itself. Any general advice provided to the issuer that does not reach the threshold of a recommendation is excluded from the Rule. Additionally, once an underwriter has been formally engaged by the issuer to serve on a transaction, the underwriter’s advice and recommendations are excluded from the Rule. Finally, finance professionals that provide municipal issuers with advice in accordance with their office are generally excluded from the MA Rule, such as registered investment advisors offering investment advice, engineers offering engineering advice, and attorneys offering legal advice.",
            cover: "https://cdn.kibrispdr.org/data/1759/customer-service-animated-gif-45.gif"
        },
    ]
    return (
        <>
            <section className="data-containerx">
                {/* <div className=""> */}
                {data.map((val) => {
                    return (
                        <>
                            <div className="data-l">
                                <div className="heading">
                                    <h3>Freelancer Policies</h3>
                                </div>
                                <p>{val.desc1}</p>
                                <p>{val.desc2}</p>
                                <p>{val.desc3}</p>
                            </div>
                            <div className="data-r">
                                <div className="img-x">
                                    <img src={val.cover} alt='' className="img-img"/>
                                </div>
                            </div>
                        </>
                    )
                })}
                {/* </div> */}
            </section>
        </>
    )
}
export default Service