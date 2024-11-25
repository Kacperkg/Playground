import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import landingCss from "./landing-page.module.css";

export default function LandingPage() {
  const text1 = "Kacper";
  const text2 = "Gajdarski";

  // Framer Motion Variants
  const sentence = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const boxControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    async function boxSequence() {
      // Animate the box
      await boxControls.start({
        scale: 2,
        backgroundColor: "black",
        rotate: "45deg",
        transition: { duration: 1, ease: "easeInOut", delay: 2.2 },
      });

      await boxControls.start({
        scale: 20,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Trigger the text animation after the box animations are done
      await textControls.start("visible");
    }

    boxSequence();
  }, [boxControls, textControls]);

  return (
    <>
      {/* Overlay Animation */}
      <div className={landingCss.overlay1}>
        {/* Box Animating */}
        <motion.div className={landingCss.box} animate={boxControls}>
          <motion.div
            className={landingCss.box1}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            className={landingCss.box2}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className={landingCss.box3}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text Animating */}
        <div className={landingCss.textContainer}>
          {/* First Line */}
          <motion.div
            className={landingCss.textLine}
            variants={sentence}
            initial="hidden"
            animate={textControls}
          >
            {text1.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
            <br />
            {text2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
