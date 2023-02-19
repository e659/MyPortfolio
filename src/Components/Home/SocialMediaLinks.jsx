import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import myResum from "../resum/eman shalapy Cv.pdf";
import "./styles/social.scss";
export default function SocialMediaLinks() {
  return (
    <>
      <div className="socialMedia">
        <a href="https://github.com/e659" target="_blank">
          <AiFillGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/eman-shalapy-34a013196/"
          target="_blank"
          className="py-3"
        >
          <AiFillLinkedin size={25} />
        </a>
        <a href="https://www.behance.net/emoo1" target="_blank">
          <FaBehanceSquare size={25} />
        </a>
        <div className="downloadResum  pt-2">
          <a
            className="justify-center  rounded-full"
            href={myResum}
            target="_blank"
            rel="noopener noreferrer"
            download=" Eman Shalapy Resume.pdf"
          >
            <MdOutlineFileDownload className="" size={25} />
          </a>
        </div>
      </div>
    </>
  );
}
