'use client'

import {motion} from 'framer-motion';

export const metadata = {
    title: "animation",
    description: "Page description",
  };
  
  
  const Animation = () => {
    return (
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .7,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}>
        <h1 className='test'>hello</h1>
      </motion.div>
    );
  };
  
  export default Animation;
  