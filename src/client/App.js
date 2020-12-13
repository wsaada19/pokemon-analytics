import React, { useEffect } from "react";
import "./app.css";
import "semantic-ui-css/semantic.min.css";
import CardSearchForm from "./CardSearchForm";

const App = () => {
  // useEffect(() => {
  //   fetch('/api/getUsername')
  //     .then((res) => res.json())
  //     .then((user) => this.setState({ username: user.username }));
  // });

  return (
    <div>
      <h1>Hello Trainer!</h1>
      <CardSearchForm />
    </div>
  );
};

export default App;
