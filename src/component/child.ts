import React, { memo, useImperativeHandle, useRef } from "react";


const  Child =(props, ref)=> {
    const {fetchStatus} = props;
    console.log("props HOC", props)
    const [state, setState] = React.useState((pref) =>{
        console.log("state", pref)
        return "fdsf"
    })
    
    function clickMe (){
        console.log("Click me...")
    }
    useImperativeHandle(ref, () =>({
            clickMe: clickMe
    }))
    
  return (
    <div>
        <h1>{state}</h1>
      <input 
      aria-label="aria-label"
      type="text"
      onChange={(e) => setState(e.target.value) } />
    </div>
  );
} 

export default React.forwardRef(Child)