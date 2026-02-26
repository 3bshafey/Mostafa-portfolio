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
    const timer = setInterval(
      setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, [])
  
  

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        <h1 className="text-white text-8xl font-bold">STARTER CODE</h1>
      </div>
    </>
  );
}

export default App;
