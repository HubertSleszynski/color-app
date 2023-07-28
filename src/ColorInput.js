import React from 'react'
import './Colorinput.css'
import colorNames from 'colornames'

export default function ColorInput({
    writtenColor, newWrittenColor, newHexColor }) {
  return (
    <form  className="colorInput" onSubmit={(e) => e.preventDefault()}>
            <input
                id="addColor"
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={writtenColor}
                onChange={(e) => {
                    newWrittenColor(e.target.value);
                    newHexColor(colorNames(e.target.value));
                }}
            />
        </form>
  )
}
