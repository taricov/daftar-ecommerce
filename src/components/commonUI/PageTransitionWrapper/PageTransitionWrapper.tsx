/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

const PageTransitionWrapper: any = ({ children }:any) => {

  return (
    <motion.div
    // transition={{ duration: 1, origin: 1 }}
      initial={{ opacity: 0, x: "3vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .6}}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
