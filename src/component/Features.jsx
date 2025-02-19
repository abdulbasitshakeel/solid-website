import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const Features = () => {

    return(
        <>
            <content>
                <div className="main">
                    <div className="features-work" style={{marginBottom:'5%'}}>
                        <div className="featurse-main" style={{textAlign:'center'}}>
                            <button style={{backgroundColor:'#ececf7',padding:'10px',border:'1px solid white',borderRadius:'18px'}}>SOLID FEATURES</button>
                            <h1 style={{textAlign:'center',fontSize:'44px',marginBottom:'1%',marginTop:'1%'}}>Core Features of Solid</h1>
                            <p style={{color:'gray', textAlign:'center'}}>Solid is a decentralization project that gives users control over their data<br></br> through personal online data stores project that (pods).</p>
                        </div>
                        <div className="card-work">
                            <div className="card">
                                <div className="icon"><img src="./public/images/icon-01.svg" alt="Icon" /></div>
                                <h3>Crafted for SaaS</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                            </div>
                            <div className="card">
                                <div className="icon"><img src="./public/images/icon-02.svg" alt="Icon" /></div>
                                <h3>High-quality Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                            </div>
                            <div className="card">
                                <div className="icon"><img src="./public/images/icon-03.svg" alt="Icon" /></div>
                                <h3>Next.js + TypeScript</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </content>
        </>
    )
}

export default Features