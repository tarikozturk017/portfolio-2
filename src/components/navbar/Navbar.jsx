import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import resume from "../../../public/resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tarik Ozturk
        </motion.span>
        <div className="social">
          <a href={resume} target="_blank" rel="noreferrer">
            <div className="resume">
              <button>My Resume</button>
            </div>
          </a>
          {/* <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
