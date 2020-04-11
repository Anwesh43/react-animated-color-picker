import React, {useEffect} from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import ColorArea from './ColorArea'
import ColorButton from './ColorButton'

const ColorPicker = ({colors}) => {
    const {w, h, resize, disableResize} = useDimension()
    const {start, scale, curr, prev} = useAnimatedScale(0.02, 30)
    useEffect(() => {
        resize()
        return disableResize
    })
    return <div>
              <ColorArea colors = {colors} w = {w} h = {h} curr = {curr} prev = {prev} scale = {scale}/>
              {colors.map((color, i) => <ColorButton i = {i} colors = {colors} w = {w} h = {h} prev = {prev} scale = {i == curr ? scale : 0}
              handleClick = {(i) => {
                  start(i)
              }}/>)}
          </div>
}

export default ColorPicker
