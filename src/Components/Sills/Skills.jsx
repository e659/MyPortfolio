import React from "react";
import images from "./SkillImages/Images";
import { easeInOut, motion } from "framer-motion";
import "./Styles/skills.scss";
export default function Skills() {
  const imagesArr = Object.values(images);
  return (
    <>
      <div className="container py-5" id="skills">
        <div className="pb-5">
          <h2 className="head-text">
            Skills <span> &</span> Experiences{" "}
          </h2>
        </div>
        <motion.div
          className="row w-75 cardRow"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <div className="col-md-6">
            <motion.div className="app__skills-list">
              <div className="row">
                {imagesArr.map((image, index) => (
                  <div className="col-3" key={index}>
                    <motion.div
                      style={{ cursor: "pointer" }}
                      className="skillItem py-2 d-flex justify-content-center rounded"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, ease: easeInOut }}
                      whileHover={{ scale: [1, 0.9] }}
                    >
                      <img src={image} alt="" className="w-50 " />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="col-md-6 app__skils-experience"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: easeInOut }}
          >
            <motion.div
              className="experince d-flex justify-content-between"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5, ease: easeInOut }}
            >
              <div className="px-3 year">
                <p>2022</p>
              </div>
              <div className="skillDeteals">
                <h4>FRONT-END WEB DEVELOPER</h4>
                <h5 className="pt-1">Rescounts</h5>
                <p>
                  I worked on Rescounts Ticket App Using technologies Like Html,
                  css, bootstarp, js, sass, React, Redux and react Packages and
                  react libraries. it is a fully responsive web App
                </p>
              </div>
            </motion.div>
            <motion.div
              className="experince d-flex justify-content-between"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5, ease: easeInOut }}
            >
              <div className="px-3 year">
                <p>2021</p>
              </div>
              <div className="skillDeteals">
                <h4>FRONT-END WEB DEVELOPER INTERN</h4>
                <h5>Route academy</h5>
                <p>
                  Learning web design technologies and skills Practicing on
                  HTML, CSS, Bootstrap & JS Frontend frameworks like REACT
                  Learning the functionality of the web pages learning how to
                  build a full responsive web pages
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
