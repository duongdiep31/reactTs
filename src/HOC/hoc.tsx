import React, { Component, ComponentType, useCallback } from "react";
interface component{
  Component?: React.ReactNode
}
export default function Hoc<T>(Component: ComponentType<T>){
  //     const data = "qqqq"
  //   return (
  //     <>
  //       <Component data={data}/>
  //       <h1>HOC</h1>
  //     </>
  //   );

  return (props: T) => {
    const data = "dsdsdd";

    return (
      <>
        <Component {...props} data={data} />
        <h1>{data}</h1>
      </>
    );
  };
}
