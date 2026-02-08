import { createContext, useContext } from "react";

export const AnimationContext = createContext(null);

export function useAnimationContext(){
    return useContext(AnimationContext);
}