import { scale } from "framer-motion";
import { AnimationContext } from "./AnimationContext";

export default function AnimationProvider({ children }) {
    const parentVariants = {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            }
        },
    };

    const childVariants = {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            transition: {
                type:'spring',
                stiffness:250,
                damping:15,
                duration:0.5,
                ease:"easeOut",
            },
        },

    };

    return (
        <AnimationContext.Provider value={{ parentVariants, childVariants }}>
            {children}
        </AnimationContext.Provider>
    );
}
