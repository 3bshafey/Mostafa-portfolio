import { useEffect , useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
} from "lucide-react"

import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs,
} from './constants/data'

import pp from "/pp.jpg"

function App() {

  // create the logic for live clock
  const[time, setTime] = useState('')
  const[mounted, setMounted] = useState(false)
  
  // to run the effect as soon as the components are mounted
  useEffect(()=> {
    setMounted(true);
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, [])
  
  const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
  

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i)=> (
          <motion.div key={i}
          className={`absolute rounded-full ${blob.className}`}
          animate = {blob.animate}
          transition={{
            duration: blob.duration,
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "mirror"
          }}
          ></motion.div>
        ))}

        <motion.main
          variants={containerVariants} 
          initial="hidden"
          animate={mounted? "show" : "hidden"}
          className="main-grid"
        ></motion.main>

      </div>
    </>
  );
}

export default App;
