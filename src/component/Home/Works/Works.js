import React from "react";
import book from "../../../img/check.png";
import confirm from "../../../img/approval.png";
import delivary from "../../../img/address.png";
import WorkDetail from "../WorkDetail/WorkDetail";

const workData = [
  {
    title: "Book",
    about:
      "Easiest way to book a service is online! Provide necessary details while we take you through a quick booking journey. ",
    img: book,
  },
  {
    title: "Confirm",
    about:
      "Get a call from our customer manager, confirm your schedule right away!",
    img: confirm,
  },
  {
    title: "delivary",
    about:
      "Get a call from our customer manager, confirm your schedule right away!",
    img: delivary,
  },
];

const Works = () => {
  return (
    <section>
      <div className="text-center mt-5 pt-5">
        <h2 style={{ color: "#46475c" }}>
            <b>How HomeService Works</b>
        </h2>
      </div>
      <div className = 'd-flex justify-content-center'>
            <div className="w-75 row mt-5">
                {
                    workData.map(work => <WorkDetail work ={work}></WorkDetail>)       
                }
            </div>
            </div>
    </section>
  );
};

export default Works;
