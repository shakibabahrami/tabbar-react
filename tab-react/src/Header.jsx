import React from "react";
import CreateTab from "./CreateTab";
import { useState } from "react";

function Header() {
  const tabs = [
    { id: 1, name: "TAB 1", fullText: "111 Lorem ipsum dolor sit. 111" },
    { id: 2, name: "TAB 2", fullText: "222 Lorem ipsum dolor sit. 222" },
    { id: 3, name: "TAB 3", fullText: "333 Lorem ipsum dolor sit. 333" },
    { id: 4, name: "TAB 4", fullText: "444 Lorem ipsum dolor sit. 444" },
  ];
  const [tabData, setTabData] = useState(tabs[0]);

  return (
    <div id="header-container">
      <h1>Tabs Components with React</h1>
      <ul>
        {tabs.map((tab) => (
          <CreateTab key={tab.id} data={tab} func={setTabData} />
        ))}
      </ul>
      <p>{tabData.fullText}</p>
    </div>
  );
}

export default Header;
