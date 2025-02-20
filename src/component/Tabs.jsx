import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  return (
    <>
    <div className="main">
        <div className="tabs-work">
            <button onClick={() => setActiveTab("tab1")} className={activeTab === "tab1" ? "active" : ""}>
                Clean User Interface
            </button>
            <button onClick={() => setActiveTab("tab2")} className={activeTab === "tab2" ? "active" : ""}>
                Essential Business Pages
            </button>
            <button onClick={() => setActiveTab("tab3")} className={activeTab === "tab3" ? "active" : ""}>
                Fully Functional Integrations
            </button>
        </div>
        <div>
            {activeTab === "tab1" && 
                <div className="main">
                    <div className="tabs-text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bg-left" style={{marginLeft:'3%'}}>
                                    <h1 style={{ marginTop: '12%' }}>Solid UI with Solid<br />Features.</h1>
                                    <p>
                                    Packed with all the key integrations you need for swift SaaS startup launch,
                                    including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More.
                                    Built with - Next.js, React 18 and TypeScript.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg-right">
                                <img src="../public/images/tabs.png" alt="" className="img-fluid" />
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
                }
                {activeTab === "tab2" && 
                <div className="main">
                    <div className="tabs-text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bg-left" style={{marginLeft:'3%'}}>
                                    <h1 style={{ marginTop: '12%' }}>Pages and UI Components You Need for a SaaS.</h1>
                                    <p>
                                    Packed with all the key integrations you need for swift SaaS startup launch,
                                    including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More.
                                    Built with - Next.js, React 18 and TypeScript.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg-right">
                                <img src="../public/images/tabs.png" alt="" className="img-fluid" />
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
                }
                {activeTab === "tab3" && 
                <div className="main">
                    <div className="tabs-text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bg-left" style={{marginLeft:'3%'}}>
                                    <h1 style={{ marginTop: '12%'}}>Functional Blog, DB, Auth and Many More</h1>
                                    <p>
                                    Packed with all the key integrations you need for swift SaaS startup launch,
                                    including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More.
                                    Built with - Next.js, React 18 and TypeScript.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg-right">
                                <img src="../public/images/tabs.png" alt="" className="img-fluid" />
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
               }
        </div>
    </div>
    </>
  );
};

export default Tabs;
