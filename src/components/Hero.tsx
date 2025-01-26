import { motion } from "motion/react";
import { Title } from "./Title";

export default function Hero() {
  return (
    <div className="w-screen items-center justify-center">
      <div className="flex items-center justify-between flex-cols-3 gap-2 m-48">
        <motion.img       
        initial={{ x: -500, y: -500 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="w-1/4" src="/stalls.png" />
        <div>
          <Title text="Savor the World, "/>
          <br />
          <Title text="One Dish at a Time." />
        </div>
        <motion.img       
        initial={{ x: 500, y: 500 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="w-1/4" src="/taco.png" />
      </div>
      
    </div>
  )
}
