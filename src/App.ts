import logo from "./logo.svg";
import "./App.css";
import Child from "./component/child";
import React, { useRef } from "react";
import { useScreen } from "./hook/custome";
import Hoc from "./HOC/hoc";

function App() {
  const [isVisible, setVisible] = React.useState(true);
  const [fetchStatus, setFetchStatus] = React.useState("start");
  
    const testUseCallback = React.useMemo<HTMLElement>((text: string) =>{
      return <h1>useMemo: {text}</h1>
    },[isVisible])
    const [width, height] = useScreen();
    console.log("width: " , width ," height: " , height)


    const ref = React.useRef();

    const hight = Hoc(Child)
  return (
    <>
    <div>
      <button onClick={()=> ref.current.clickMe()}>toggle</button>
      {/* <input onChange={(e) => setFetchStatus(e.target.value) } /> */}
      {/* {testUseCallback(fetchStatus)} */}
      {/* <Child ref={ref} fetchStatus={fetchStatus} /> */}
      {hight()}
      </div>
    </>
  );
}

export default App;
