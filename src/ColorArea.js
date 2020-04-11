import React from 'react'

const colorStyle = (w, h, color, scale) => {
    const position = 'absolute'
    const height = `${0.5 * h * scale}px`
    const width = `${0.3 * w * scale}px`
    const left = `${w /2 - parseFloat(width) / 2}px`
    const top = `${0.3 * h - parseFloat(height) / 2}px`
    const background = color
    return {position, height, width, left, top, background}
}


const ColorArea = ({w, h, curr, prev, scale}) => {
    return <div>
        <div style = {colorStyle(w, h, prev, 1)}/>
        <div style = {colorStyle(w, h, curr, scale)}/>
    </div>
}

export default ColorArea
