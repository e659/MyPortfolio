import React, { useState } from "react";
import cup from "../../images/cup.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import "./styles/contact.scss";
import emailjs from "emailjs-com";
import Joi from "joi";
import { easeInOut, motion } from "framer-motion";
export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validationErr, setValidationErr] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  // getFormValues
  function getFormData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  // submit
  async function submit(e) {
    e.preventDefault();
    let validationResult = validateForm();
    if (validationResult.error) {
      setValidationErr(validationResult.error.details);
    } else {
      const serviceId = "service_4o70bwn";
      const templateId = "template_has1vzu";
      const userId = "JtWUgyksD602fOWpx";

      await emailjs.send(serviceId, templateId, user, userId).then(
        (response) => {
          console.log(response);
          setErrorMsg(
            "Thank you for contacting me  I will respond to your message as soon as I can."
          );
        },
        (err) => {
          setErrorMsg("Something went wrong.");
        }
      );
    }
  }
  // validation
  function validateForm() {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } })
        .messages({
          "string.base": `"email" should be a type of 'email'`,
          "any.required": `"email" is a required field`,
        }),
      name: Joi.string().required(),
      subject: Joi.string().required(),
      message: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <div className="app__header">
        <div className="container py-5" id="contact">
          <div className="d-flex justify-content-center">
            <h2 className="head-text">
              {" "}
              Take A Coffee <span>& </span>
              Chat With Me
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <motion.img
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileInView={{ scale: [0, 1] }}
              src={cup}
              alt="coffe"
              className="CoffeCup"
              style={{ width: "10%" }}
            />
          </div>
          <motion.div
            className="row  cardContactRow py-3"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <div className="col-md-6 ">
              <motion.div
                className="info emailInfo"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: easeInOut }}
                whileHover={{ scale: [1, 0.9] }}
              >
                <div className="email d-flex py-3 ">
                  <ul class="fa-ul">
                    <li className="">
                      <span class="fa-li">
                        <img
                          src={email}
                          alt="email"
                          className="img-fluid "
                          style={{ width: "40px", height: "40px" }}
                        />
                      </span>
                      <a
                        href="mailto:emanshalapy255@gmail.com"
                        style={{ textDecoration: "none" }}
                      >
                        emanshalapy255@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="info"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: easeInOut }}
                whileHover={{ scale: [1, 0.9] }}
              >
                <div className="email d-flex  py-3">
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <img
                          src={phone}
                          alt="email"
                          className="img-fluid "
                          style={{ width: "40px", height: "40px" }}
                        />
                      </span>
                      <a
                        href="tel:+201003900914"
                        style={{ textDecoration: "none" }}
                      >
                        01003900914
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* errorMsg */}
            {errorMsg ? (
              <div className="alert alert-danger p-2 regerrorMsg mt-3">
                {errorMsg}
              </div>
            ) : (
              ""
            )}
            {validationErr.map((error, index) => (
              <div
                key={index}
                className="alert alert-danger p-2 regerrorMsg mt-3"
              >
                {error.message}
              </div>
            ))}
            <form
              onSubmit={submit}
              className="row g-3 "
              style={{ width: "87%" }}
            >
              <div className="col-12">
                <input
                  onChange={getFormData}
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-12">
                <input
                  onChange={getFormData}
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-12 ">
                <input
                  onChange={getFormData}
                  type="text"
                  name="subject"
                  className="form-control"
                  id="inputName"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3 col-12 ">
                <textarea
                  onChange={getFormData}
                  name="message"
                  placeholder="Your Massage"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style={{ height: "150px" }}
                ></textarea>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary submitBtn px-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
