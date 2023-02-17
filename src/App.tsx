import "./App.css";
import React from "react";
import Hoc from "./HOC/hoc";
import Child from "@component/child";
import logo from "@assets/logo.svg"
import HookForm from "@component/form";
import LazyLoadImege from "@component/lazyLoadImega";
import {useLoaderData, useOutletContext} from 'react-router-dom'
// import Hoc from "@Hoc/hoc";
// import { useScreen } from "@hook/custome";

const LazyComponent = React.lazy(() => import('@component/lazyLoadImega'))
export interface CurrentRef{
  clickMe: () => void;
}

function App(props: any) {
  console.log("props", props)
  const loaderData = useLoaderData()
  const context = useOutletContext()
  console.log("context", context)
  const [isVisible, setVisible] = React.useState<boolean>(true);
  const [fetchStatus, setFetchStatus] = React.useState<string>("start");
  const imageList: string[]=[
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
  ]
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


  return (
    <>
      <div>
        {/* <img src={logo} /> */}
        {/* <button onClick={() => ref.current.clickMe()}>toggle</button> */}
        {/* <input onChange={(e) => setFetchStatus(e.target.value) } /> */}
        {/* {testUseCallback(fetchStatus)} */}
        {/* <Child ref={ref} fetchStatus={fetchStatus} /> */}
        <Hight />
      <HookForm />
      {/* {
          <LazyComponent  dataImage={imageList} />
      } */}
      </div>
    </>
  );
}

export default App;
