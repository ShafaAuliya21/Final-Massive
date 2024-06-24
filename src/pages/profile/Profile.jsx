import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarComponent from "./profileSidebar/SidebarComponent";
import ContentComponent from "./contentComponent/ContentComponent";
import SubNavbarComponent from "./subNavbar/SubNavbarComponent";
import NavbarComponent from "./NavbarComponent";

const App = () => {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
    import("./Profile.css");
  }, []);

  const [activeTab, setActiveTab] = useState("edit-profile");
  const [isStoreSection, setIsStoreSection] = useState(false);

  // Function to handle tab change
  const handleTabChange = (tabId, isStore = false) => {
    setActiveTab(tabId);
    setIsStoreSection(isStore);
  };

  return (
    <div>
      <Navbar />
      <div className="row mt-5 mx-4">
        <div className="col-md-3">
          <SidebarComponent
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        </div>
        <div className="col-md-9">
          <ContentComponent
            activeTab={activeTab}
            isStoreSection={isStoreSection}
            handleTabChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
