import React from "react";
import AboutContents from "../About/AboutContents/AboutContents";
import AboutPhoto from "../About/AboutPhoto/AboutPhoto";

const Home = () => {
    return (
      <div className="my-5">
        <div className="container my-5">
          <br />
          <div className="row my-5">
            <div className="col-sm-12 col-md-5">
              <AboutPhoto />
            </div>
            <div className="col-sm-12 col-md-7">
              <AboutContents />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;