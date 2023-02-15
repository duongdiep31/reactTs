import React from "react";

export interface childProps {
  fetchStatus?: string,
  data?: string
}

const Child = (props: childProps) => {
  const { fetchStatus } = props;
  
  const [state, setState] = React.useState<string>("string")

  function clickMe() {
    console.log("Click me...")
  }

  // useImperativeHandle(ref, (): {
  //   clickMe: () => void
  // } =>({
  //         clickMe: clickMe
  // }))

  return (
    <div>
      <h1>{state}</h1>
      <input
        aria-label="aria-label"
        type="text"
        onChange={(e) => setState(e.target.value)} />
    </div>
  );
}

export default Child;