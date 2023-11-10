import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Slider from "../slider/Slider";

import IMAGES from "../slider/Images";

const items = [
  {
    id: 1,
    title: "Curiee",
    img: IMAGES.curiee,
    demo: "https://curiee-app.vercel.app/",
    source: "https://github.com/tarikozturk017/Curiee",
    desc: "Curiee is a full-stack web application for therapists to assign personalized treatments and patients to explore new treatment modals. Optimized treatment tracking, ratings, and favorites for enhanced healthcare experiences.",
  },
  {
    id: 2,
    title: "AuctionHub",
    img: IMAGES.auctionhub,
    demo: "https://auctionhub-app.onrender.com/",
    source: "https://github.com/tarikozturk017/ecommerce-django",
    desc: "AuctionHub is an online auction/shopping web application where you can bid the existing listings. You can add an item to your watchlist, comment on listings, create a listing, search items, and more features. Note: It takes some time to load.",
  },
  {
    id: 3,
    title: "Other Projects",
    img: IMAGES.others,
    // demo: "https://auctionhub-app.onrender.com/",
    list: "https://github.com/tarikozturk017/portfolio-2/blob/main/project-list.md",
    desc: "Reasype, PlanetBlue, Speed Typing Game, Meme Generator, Tenzies etc. You can see my other projects, test the demo or live demo versions. I used different technologies such as Python, Django, Flask, C/C++, JavaScript, React, TailwindCSS etc. to create these projects.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <Slider images={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              {item.demo && (
                <button>
                  <a href={item.demo} target={"_blank"}>
                    {" "}
                    See Demo
                  </a>
                </button>
              )}
              {item.source && (
                <button>
                  <a href={item.source} target={"_blank"}>
                    {" "}
                    See Source Code
                  </a>
                </button>
              )}
              {item.list && (
                <button>
                  <a href={item.list} target={"_blank"}>
                    {" "}
                    See Project List
                  </a>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        {/* <Slider images={IMAGES.others} /> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
