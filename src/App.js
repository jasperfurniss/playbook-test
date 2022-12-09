import React from "react";
import "./styles.css";
import { Icon, Title } from "playbook-ui";

export default function App() {
  return (
    <div className="App">
      <h1>My cool env: {`${process.env.REACT_APP_TITLE}`}</h1>
      <Title size={3} text="hello" />
      <Icon icon="face-awesome" size="xl" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
