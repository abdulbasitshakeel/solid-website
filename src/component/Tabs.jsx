import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  return (
    <div>
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
                <div className="hero-work">
                    <div className="bg-left">
                        <h1 style={{marginTop:'4%'}}>Solid UI with Solid<br></br> Features.</h1>
                        <p>Packed with all the key integrations you need for swift SaaS startup launch, including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More. Built-winth - Next.js, React 18 and TypeScript.</p>
                    </div>
                    <div className="bg-right">
                        <img src="../public/images/tabs.png" alt="" />
                    </div>
                </div>
            </div>}
            {activeTab === "tab2" && 
            <div className="main">
                <div className="hero-work">
                    <div className="bg-left">
                        <h1 style={{marginTop:'4%'}}>Pages and UI Components You Need for a SaaS.</h1>
                        <p>Packed with all the key integrations you need for swift SaaS startup launch, including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More. Built-winth - Next.js, React 18 and TypeScript.</p>
                    </div>
                    <div className="bg-right">
                        <img src="../public/images/tabs.png" alt="" />
                    </div>
                </div>
            </div>}
            {activeTab === "tab3" && 
            <div className="main">
                <div className="hero-work">
                    <div className="bg-left">
                        <h1 style={{marginTop:'4%'}}>Functional Blog, DB, Auth and Many More</h1>
                        <p>Packed with all the key integrations you need for swift SaaS startup launch, including - Authentication, Database, Sanity Blog, Essential UI Components, Business Pages and More. Built-winth - Next.js, React 18 and TypeScript.</p>
                    </div>
                    <div className="bg-right">
                        <img src="../public/images/tabs.png" alt="" />
                    </div>
                </div>
            </div>}
      </div>
    </div>
  );
};

export default Tabs;
