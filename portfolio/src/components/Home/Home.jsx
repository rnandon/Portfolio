import React from "react";
import AboutContents from "../About/AboutContents/AboutContents";
import AboutPhoto from "../About/AboutPhoto/AboutPhoto";

const Home = () => {
    console.log("I see you're taking a look at my code! \nIf you see anything that you think could be improved, please let me know- I'm always open to constructive criticism.\n\nIf you like what you see, don't forget to send me a message or connect on LinkedIn!");

    return (
      <div className="my-5">
        <div className="container my-5">
          <br />
          <div className="row my-5">
            <div className="col-sm-12 col-md-5">
              <AboutPhoto type="home"/>
            </div>
            <div className="col-sm-12 col-md-7">
              <AboutContents type="home"/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;