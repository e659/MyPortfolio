import React, { useEffect, useState } from "react";
import "./Styles/projects.scss";
import { easeInOut, motion, animateCard } from "framer-motion";
import front from "../../images/frontend.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import projects from "../Data/data";
export default function Projects() {
  const [active, setactive] = useState("All");
  const [works, setworks] = useState([]);
  const [slice, setslice] = useState(3);
  const [filterworks, setfilterworks] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? projects.length : 3;
  console.log(projects);
  const handleToggle = (item) => {
    setactive(item);

    if (item === "All") {
      setfilterworks(works);
      console.log(filterworks);
    } else {
      let newArr = works.filter((project) => project.tage.includes(item));
      console.log(newArr);
      setfilterworks(newArr);
    }
  };
  useEffect(() => {
    setworks(projects);
    setfilterworks(projects);
  }, []);
  return (
    <>
      <div className="app__header">
        <div className="container py-5" id="project">
          <div>
            <h2 className="head-text">
              {" "}
              My Creative <span>Portfolio </span> Section
            </h2>
          </div>
          <div className="app__works-filter d-flex justify-content-evenly  pt-3">
            {["All", "Html&css", "javaScript", "jquery", "React.js"].map(
              (item, idx) => (
                <div
                  onClick={() => {
                    handleToggle(item);
                  }}
                  style={{ cursor: "pointer" }}
                  key={idx}
                  className={` col app__works-filter-item text-center mx-2 ${
                    active === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <motion.div
            className="row pb-5 pt-3  d-flex  cardRowProj g-5"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            {filterworks.slice(0, numberOfItems).map((proj, index) => (
              <div className="col-md-4 " key={index}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  className="app__works-portfolio"
                >
                  <div className="card proj-card ">
                    <div className="app__works-image position-relative">
                      <img
                        src={proj.image}
                        className="card-img-top image-fluid "
                        alt={proj.subtitle}
                      />
                      <div className="overLay ">
                        <motion.div
                          transition={{
                            duration: 0.5,
                            ease: easeInOut,
                            staggerChildren: 0.5,
                          }}
                          whileHover={{ opacity: [0, 1] }}
                          className="app__works-layer d-flex"
                        >
                          <a href={proj.Livelink} target="_blank">
                            <motion.div
                              ransition={{ duration: 0.5 }}
                              whileInView={{ opacity: [0, 1] }}
                              whileHover={{ scale: [1, 0.9] }}
                              className="app__flex"
                            >
                              <AiFillEye size={25} />
                            </motion.div>
                          </a>
                          <a href={proj.GLink} target="_blank">
                            <motion.div
                              ransition={{ duration: 0.5 }}
                              whileInView={{ opacity: [0, 1] }}
                              whileHover={{ scale: [1, 0.9] }}
                              className="app__flex"
                            >
                              <AiFillGithub size={25} />
                            </motion.div>
                          </a>
                        </motion.div>
                      </div>
                    </div>

                    <div className="card-body py-3 mt-2 text-center text-capitalize">
                      <h5
                        style={{ fontWeight: "bold" }}
                        className="projCard-title"
                      >
                        {proj.title}
                      </h5>
                      <p className="ProjText card-text ">{proj.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <div className="row  btnRow">
            <div className="col-md-12">
              {showMore ? (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn btn-primary  moreBtn py-2"
                >
                  Load less
                </button>
              ) : (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn btn-primary  moreBtn py-2"
                >
                  Load more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
