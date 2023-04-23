import React from "react";
import carbon_1 from "./images/carbon-footprint-1.png";
import "./FrontPage.scss";
import carbon_2 from "./images/carbon-footprint-2.jpg";

function FrontPage() {
  return (
    <div className="frontPage">
      <div>
        <img className="header-img" src={carbon_1} alt="Carbon Footprint" />
      </div>
      <div className="mt-3 text-div">
        {/* <div className="text-content"> */}
        <h3 className="text-content">
          Discover Your Carbon Footprint and Take Action with Our Interactive
          Calculator! Find Out Your Environmental Impact and Learn How to Reduce
          It Today!
        </h3>
        {/* </div> */}
      </div>
      <div className="d-flex p-1 container" style={{border: "1px solid black"}}>
        <div className="para-div container mt-3 p-5">
          <h3>What is Carbon Footprint ?</h3>
          <p>
            "Carbon footprint" refers to the total amount of greenhouse gases,
            particularly carbon dioxide, that are emitted into the atmosphere by
            an individual, organization, or product. This measure is used to
            assess the impact that human activities have on the environment and
            climate change.
          </p>
          <p>
            Unlocking the Secrets of Climate Change: Understanding Carbon
            Footprint. Learn How Human Activities Contribute to Greenhouse Gas
            Emissions. Calculate Your Impact, Take Action, and Be Part of the
            Solution for a Greener Future!
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <img src={carbon_2} alt="foot" style={{height: "80%", right: ""}}/>
        </div>
      </div>
      {/* <Row className="my-5">
        <Col>
          <h3>What is Carbon Footprint ?</h3>
          <hr />
          <p>
            "Carbon footprint" refers to the total amount of greenhouse gases,
            particularly carbon dioxide, that are emitted into the atmosphere by
            an individual, organization, or product. This measure is used to
            assess the impact that human activities have on the environment and
            climate change.
          </p>
          <p>
            Generally speaking, the carbon footprint of an individual or
            organization is calculated by taking into account the amount of
            energy consumed and the associated emissions of carbon dioxide and
            other greenhouse gases, as well as other factors like
            transportation, waste production, and food consumption. By
            understanding and reducing our carbon footprint, we can take steps
            to mitigate the negative effects of climate change and promote a
            more sustainable future.
          </p>
        </Col>
        <Col>
          <img src={carbon_2} alt="Carbon Footprint" />
        </Col>
      </Row> */}
    </div>
  );
}

export default FrontPage;
