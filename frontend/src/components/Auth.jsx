import React from "react";

const Auth = (props) => {
  return (
    <div>
      <h1>Auth Page</h1>
      {React.Children.map(props.children, (child) => {
        return child;
      })}
    </div>
  );
};

export default Auth;