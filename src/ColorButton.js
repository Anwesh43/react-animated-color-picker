import React from 'react'

const colorButtonStyle = (i, colors, w, h, scale, opacity) => {
    const gap = w / (2 * colors.length)
    const width = `${gap * scale}px`
    const height = `${0.2 * h * scale}px`
    const position = 'absolute'
    const left = `${w / 3 + gap * i + gap / 2 - (gap * 0.5 * scale)}px`
    const top = `${0.7 * h + 0.1 * h - 0.1 * h * scale}px`
    const background = opacity == 1 ? colors[i] : "gray"


    return {position, left, top, background, width, height, opacity}
}

const ColorButton = ({i, colors, w, h, scale, prev, handleClick}) => {
    const handle = () => {
        if (prev == i) {
            return
        }
        console.log(`clicked`, i)
        handleClick(i)
    }
    return (<div onClick = {handle}>
      <div style = {colorButtonStyle(i, colors, w, h, 1, 1)}/>
      <div style = {colorButtonStyle(i, colors, w, h, Math.sin(scale * Math.PI), 0.5)}/>
    </div>)
}

export default ColorButton
