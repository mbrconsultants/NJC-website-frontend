"use client";
import { skillData } from "@/data/Data";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import { motion } from "framer-motion";

const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".rv-2-skill-bars");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <section className="rv-2-skills" id="skills">
      <div className="container">
        <div className="row gy-4 gy-sm-5 align-items-center">
          <div className="col-lg-6">
            <div className="rv-2-skills__img reveal">
              <ImgAnimateLeftToRight
                src="assets/img/rv-2-skills-img.jpg"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <DivAnimateYAxis className="rv-2-skills__txt">
              <h2 className="rv-2-section-title rv-text-anime">
                Professional Skills
              </h2>

              <p className="rv-2-skills__descr rv-text-anime">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit proin
                leo sem, luctus turpis in, feugiat convallis diam.
              </p>

              <div className="rv-2-skill-bars">
                {skillData.map((item) => (
                  <div className="rv-2-skill" key={item.id}>
                    <h6 className="rv-2-skill__title">{item.title}</h6>
                    <div className="progress-container">
                      <motion.div
                        className="progressbar"
                        initial={{
                          width: "0%",
                        }}
                        whileInView={{
                          width: `${item.value}%`,
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="progress-label">
                          {isVisible && (
                            <CountUp
                              start={1}
                              end={item.value}
                              duration={2.5}
                              formattingFn={(value) => `${value}%`}
                            />
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </DivAnimateYAxis>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
