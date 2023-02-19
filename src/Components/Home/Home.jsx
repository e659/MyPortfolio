import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { motion } from "framer-motion";
import "./styles/home.scss";
import images from "../images/Images";
export default function Home() {
  return (
    <>
      <div
        className="app__header vh-100  d-flex justify-content-center align-items-center position-relative"
        id="home"
      >
        <div className="container  py-5 homeContainer">
          <SocialMediaLinks className="homeSocial" />
          <div className="row flex-column-reverse  flex-md-row">
            <div className="col-md-8">
              <div className="app__header-info">
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="app__header-badge "
                >
                  <div className="name ">
                    <span className="">👋</span>
                    <p className="mb-0">Hello I'm</p>
                    <h1>Eman Shalapy</h1>
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="app__header-badge "
                >
                  <div className="myInfo mt-2">
                    <p className="mb-0">
                      I’m a Front End Developer & Ui Developer & Ux/Ui Designer
                    </p>
                  </div>
                </motion.div>

                <div className="links mt-2">
                  <motion.div
                    animate={{ x: 7 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      ease: "linear",
                    }}
                  >
                    <a href="https://github.com/e659" target="_blank">
                      GH
                    </a>
                    <a
                      href=" www.linkedin.com/in/eman-shalapy-34a013196"
                      target="_blank"
                      className="px-5"
                    >
                      LI
                    </a>
                    <a href="https://www.behance.net/emoo1" target="_blank">
                      BE
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avater p-4">
                <motion.img
                  className="img-fluid"
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileInView={{ scale: [0, 1] }}
                  src={images.av}
                  alt="avater"
                />
              </div>
            </div>
          </div>

          {/* <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-3">
              <div className="app__header-box d-flex flex-column align-self-start position-relative">
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="app__header-badge "
                >
                  <span className="py-0">👋</span>
                  <div className="app__header-info">
                    <p className="my-1" style={{ fontSize: "1rem" }}>
                      hello I am
                    </p>
                    <h1 style={{ fontSize: "2rem" }}>Eman Shalapy</h1>
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className=" app__header-info mt-3 px-2"
                >
                  <p className="mb-2 pt-2" style={{ fontSize: "1rem" }}>
                    Frontend developer
                  </p>
                  <p style={{ fontSize: "1rem" }}> ui developer</p>
                </motion.div>

                <motion.img
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileInView={{ scale: [0, 1] }}
                  className=" position-absolute"
                  src={images.cir}
                  alt="circle"
                />
              </div>
            </div>
            <div className="col-md-7 d-flex justify-content-end align-items-end">
              <motion.img
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileInView={{ scale: [0, 1] }}
                className="app__header-circle"
                src={images.cir}
                alt="circle"
              />
              <motion.img
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileInView={{ scale: [0, 1] }}
                className="rounded rounded-circle avaterImage"
                src={images.Avater}
                alt="circle"
                style={{ width: "400px", height: "400px" }}
              />
              <motion.div
                transition={{ duration: 1, ease: "easeOut" }}
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                className="app__header-circles"
              >
                {[images.ReactLogo, images.ReduxLogo, images.Jslogo].map(
                  (item, idx) => (
                    <div key={idx}>
                      <img src={item} alt="img" className="" />
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
