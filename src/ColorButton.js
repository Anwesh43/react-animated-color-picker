import React from 'react'

const colorButtonStyle = (i, colors, w, h, scale) => {
    const gap = w / (2 * colors.length)
    const position = 'absolute'
    const left = `${w / 3 + gap * i}px`
    const top = `${0.7 * h}px`
    const background = colors[i]
    const width = `${gap}px`
    const height = `${0.2 * h}px`
    const opacity = 1 - 0.5 * scale
    return {position, left, top, background, width, height, opacity}
}

const ColorButton = ({i, colors, w, h, scale, prev, handleClick}) => {
    const sc = prev == i ? 1 - scale : scale
    return (<div onClick = {() => {
      if (prev == i) {
        return
      }
      handleClick(i)
    }} >
    </div>
}

export default ColorButton
