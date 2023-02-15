import "./App.css";
import React from "react";
import Hoc from "./HOC/hoc";
import Child from "@component/child";
import logo from "@assets/logo.svg"
// import Hoc from "@Hoc/hoc";
// import { useScreen } from "@hook/custome";
export interface CurrentRef{
  clickMe: () => void;
}

console.log(Child)
function App() {

  const [isVisible, setVisible] = React.useState<boolean>(true);
  const [fetchStatus, setFetchStatus] = React.useState<string>("start");
  // const testUseCallback = React.useMemo((text: string):  => {

  //   return (
  //     <>
  //       <h1>useMemo: {text}</h1>
  //     </>
  //   )
  // }, [isVisible])

  // const testUseMemo = React.useMemo((): HTMLElement => {
  //   return (
  //     <>
  //       <div>
  //         <h1>fsdfsdfsf</h1>
  //       </div>
  //     </>
  //   )
  // }, [])


  // const [width, height] = useScreen();
  // console.log("width: ", width, " height: ", height)


  const ref = React.useRef<CurrentRef>();
  
  const Hight = Hoc(Child)
  console.log(logo)
  return (
    <>
      <div>
        <img src={logo} />
        {/* <button onClick={() => ref.current.clickMe()}>toggle</button> */}
        {/* <input onChange={(e) => setFetchStatus(e.target.value) } /> */}
        {/* {testUseCallback(fetchStatus)} */}
        {/* <Child ref={ref} fetchStatus={fetchStatus} /> */}
        <Hight />

      </div>
    </>
  );
}

export default App;
