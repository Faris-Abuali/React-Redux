import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (numOfCakes: number = 1) => {
    return {
        type: BUY_CAKE,
        payload: numOfCakes
    }
}

export default buyCake;