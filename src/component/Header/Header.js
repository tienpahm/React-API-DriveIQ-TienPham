import React from "react";

export const Header = React.memo(() => {
  return (
    <div className="text-center">
      <h1 style={{color: "#173F35", fontWeight: "700"}}>
        List of Australian Universities
      </h1>
      <div>
        <h6 className="">
          This list shows the name and domains of Universities around Australia.{" "}
        </h6>
        <div
          style={{
            width: "20%",
            height: "0.2rem",
            backgroundColor: "#CEB888",
            margin: "40px auto",
          }}></div>
      </div>
    </div>
  );
});
