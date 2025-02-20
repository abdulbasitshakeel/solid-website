import React from "react";
import cardData from "../js/cardData.json";

const Features = () => {

    return(
        <>
            <content>
                <div className="main">
                    <div className="features-work" style={{marginBottom:'8%'}}>
                        <div className="featurse-main" style={{textAlign:'center'}}>
                            <button style={{backgroundColor:'#ececf7',padding:'10px 14px',fontSize:'14px',fontWeight:'500',border:'1px solid white',borderRadius:'18px'}}>SOLID FEATURES</button>
                            <h1 style={{textAlign:'center',fontSize:'44px',marginBottom:'1%',marginTop:'1%',color:'black',fontWeight:'700'}}>Core Features of Solid</h1>
                            <p style={{color:'gray', textAlign:'center'}}>Solid is a decentralization project that gives users control over their data<br></br> through personal online data stores project that (pods).</p>
                        </div>
                        <div className="card-work">
                            {cardData.map((card, anything) => (
                              <div key={anything} className="card">
                                <div className="icon"><img src={card.icon} alt="Icon" /></div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </content>
        </>
    )
}

export default Features