import {motion} from "framer-motion";
export default function Section(){
    return (
        <motion.div
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:'easeInOut'}}
        viewport={{once:true}}
        style={{height:200, padding:100}}
        >
        <h2>I animate when you scroll to me 👋</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi deleniti consequuntur saepe reprehenderit, dolore cumque atque, rerum ab reiciendis debitis maiores impedit provident asperiores in doloribus consequatur? Praesentium, odit?</p>
        </motion.div>
    );
}