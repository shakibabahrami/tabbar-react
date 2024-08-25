import React from "react";
import { useState } from "react";

function CreateTab(props) {
  const setTabData = props.func;
  //   console.log(selected);

  const [selected, setSelected] = useState([true, false, false, false]);

  const changeText = () => {
    setTabData(props.data);
    console.log(props.data);
    
    // setSelected(!selected);
  };

  return (
    <>
      <li onClick={changeText}>{props.data.name}</li>
    </>
  );
}

export default CreateTab;
