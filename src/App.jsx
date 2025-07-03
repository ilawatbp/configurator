import Header from "./components/Header/Header.jsx";
import TabChoice from "./components/TabChoice/TabChoice.jsx";
import Content from "./components/Content/Content.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";

import LightComposition from "./components/LightComposition/LightComposition";
import LightDetail from "./components/LightDetail";
import LightType from "./components/LightType";

import "./App.css";
import { useState } from "react";

function App() {
  const [btnClicked, setBtnClicked] = useState("type");

  function handleTabClick(event) {
    const name = event.target.dataset.name;
    setBtnClicked(name);
  }
  let content = null;
  const clickValue = btnClicked;
  if (clickValue === "type") {
    content = <LightType />;
  } else if (clickValue === "detail") {
    content = <LightDetail />;
  } else if (clickValue === "composition") {
    content = <LightComposition />;
  } else {
    content = <p>Please select a light option.</p>;
  }
  return (
    <>
      <div>
        <Header handleTabClick={handleTabClick}/>
        <div className="main-container">
          <div className="side-bar">
            <SideBar
              handleTabClick={handleTabClick}
              btnClicked={btnClicked}
            ></SideBar>
          </div>
          <div className="app-container">
            {/* <TabChoice
            btnClicked={btnClicked}
            handleTabClick={handleTabClick}
          ></TabChoice> */}
            {/* <Content className="ContentEffect">{content}</Content> */}
            <Content key={btnClicked} className="ContentEffect">
              {content}
            </Content>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// new version
