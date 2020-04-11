import React, {useState} from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import ColorArea from './ColorArea'
import ColorButton from './ColorButton'

const ColorPicker = ({colors}) => {
    const {w, h, resize} = useDimension()
    const {start, scale, setCurr, curr, prev} = useAnimatedScale(0.02, 30)

    return <div>
              <ColorArea w = {w} h = {h} curr = {curr} prev = {prev} scale = {scale}/>
              {colors.map((color, i) => <ColorButton i = {i} colors = {colors} w = {w} h = {h} scale = {scale} prev = {prev == i}
              handleClick = {(i) => {
                  setCurr(i)
                  start()
              }}/>)}
          </div>
}

export default ColorPicker
