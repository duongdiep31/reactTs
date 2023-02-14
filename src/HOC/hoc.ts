import React from "react";

export default function Hoc(Component) {
  //     const data = "qqqq"
  //   return (
  //     <>
  //       <Component data={data}/>
  //       <h1>HOC</h1>
  //     </>
  //   );

  return (props) => {
    const data = "dsdsdd";

    return (
      <>
        <Component data={data} />
        <h1>{data}</h1>
      </>
    );
  };
}
