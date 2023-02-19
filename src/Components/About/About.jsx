import React from "react";
import "../About/Styles/about.scss";
import front from "../../images/frontend.jpg";
import res from "../../images/res.jpg";
import ui from "../../images/ui.jpg";
import { motion, easeInOut } from "framer-motion";
export default function About() {
  return (
    <>
      <div className="container py-5" id="about">
        <>
          <div className="d-flex justify-content-center">
            <h2 className="head-text">
              I Know That{" "}
              <span>
                Good Development <br />
              </span>
              Means <span> Good Business </span>
            </h2>
          </div>

          <div className="row  d-flex py-5 cardRow g-5">
            <div className="col-md-4">
              <motion.div
                whileInView={{ opacity: [0, 2] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: easeInOut }}
                className=""
              >
                <div className="card">
                  <img src={ui} className="card-img-top h-75" alt="front" />
                  <div className="card-body">
                    <h5 style={{ fontWeight: "bold" }} className="card-title">
                      Frontend Development
                    </h5>
                    <p className="card-text">Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: easeInOut }}
                className=""
              >
                <div className="card ">
                  <img src={front} className="card-img-top h-75" alt="front" />
                  <div className="card-body">
                    <h5 style={{ fontWeight: "bold" }} className="card-title">
                      Ui Development
                    </h5>
                    <p className="card-text">I am A Good Ui Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: easeInOut }}
                className=""
              >
                <div className="card ">
                  <img src={res} className="card-img-top h-75" alt="front" />
                  <div className="card-body">
                    <h5 style={{ fontWeight: "bold" }} className="card-title">
                      Responsive Websites
                    </h5>
                    <p className="card-text">Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
