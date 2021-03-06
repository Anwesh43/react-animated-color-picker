import {useState} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [curr, setCurr] = useState(-1)
    const [prev, setPrev] = useState(-1)
    return {
        scale,
        start(newCurr) {
            if (!animated) {
                setCurr(newCurr)
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                        setPrev(newCurr)
                    }
                }, delay)
            }
        },
        setCurr,
        curr,
        prev
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        w,
        h,
        resize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }
        },
        disableResize() {
            window.onresize = () => {
                
            }
        }
    }
}
