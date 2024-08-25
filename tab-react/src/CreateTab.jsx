import React from "react";

function CreateTab(props) {
  const setTabData = props.func;
  const changeText = () => setTabData(props.data);
  return <li onClick={changeText}>{props.data.name}</li>;
}

export default CreateTab;
