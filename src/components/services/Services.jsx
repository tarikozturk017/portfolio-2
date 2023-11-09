import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I craft innovative <br /> solutions to elevate brands.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/coding.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Crafting</motion.b> Tech
            with
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Clean</motion.b> Code
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            <ul>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full-Stack Development</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App Development</h2>
          <p>
            <ul>
              <li>iOS App Development</li>
              <li> Android App Development</li>
              <li> Cross-Platform App Development</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Solutions</h2>
          <p>
            <ul>
              <li>Custom Software Development</li>
              <li>Application Architecture</li>
              <li>API Development</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Design and Management</h2>
          <p>
            <ul>
              <li>Relational Database Design</li>
              <li>NoSQL Database Management</li>
              <li>Database Optimization</li>
            </ul>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
