"use client";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AnimationTest() {
    const [ref, inView] = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            console.log("inView")
            animation.start({
                y: "-10vh", opacity: 1,
                transition: {
                    type: "spring",
                    duration: 3,
                    bounce: 0.3
                }
            });
        }
        if (!inView) {
            console.log("Not in view")
            animation.start({ y: "5vh", opacity: 0 })
        }
        console.log("Useeffect called")
    }, [inView, animation]);

    return (
        <motion.div className="AnimationTest" style={{color: "red"}} ref={ref} animate={animation}>
            <h1> ANIMATION TEST </h1>
        </motion.div>
    )
}

export default AnimationTest;