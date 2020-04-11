import React from 'react'

const colorStyle = (w, h, color, scale) => {
    const position = 'absolute'
    const height = `${0.5 * h * scale}px`
    const width = `${0.3 * w * scale}px`
    const left = `${w /2 - parseFloat(width) / 2}px`
    const top = `${0.3 * h - parseFloat(height) / 2}px`
    const background = color
    const border = "2px solid gray"
    return {position, height, width, left, top, border, background}
}


const ColorArea = ({w, h, curr, colors, prev, scale}) => {
    return <div>
        <div style = {colorStyle(w, h, colors[prev], 1)}/>
        <div style = {colorStyle(w, h, colors[curr], scale)}/>
    </div>
}

export default ColorArea
