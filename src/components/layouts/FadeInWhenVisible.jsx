import { motion } from "framer-motion";

const getVariants = (type = "slide", direction = "up", delay = 0) => {
  const distance = 50;
  let x = 0, y = 0;

  switch (direction) {
    case "up": y = distance; break;
    case "down": y = -distance; break;
    case "left": x = distance; break;
    case "right": x = -distance; break;
  }

  const commonTransition = { duration: 0.6, delay };

  switch (type) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: commonTransition },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: commonTransition },
      };
    case "flip":
      return {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0, transition: commonTransition },
      };
    default: // "slide"
      return {
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0, transition: commonTransition },
      };
  }
};

const FadeInWhenVisible = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  animationType = "slide", // slide | fade | scale | flip
}) => {
  return (
    <motion.div
      className={className}
      variants={getVariants(animationType, direction, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
