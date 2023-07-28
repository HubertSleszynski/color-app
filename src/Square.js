import React, { useState } from 'react'
import './Square.css'

export default function Square({writtenColor, hexColor}) {
  return (
    <div className='square' style={{backgroundColor: writtenColor}}>
    <p>{writtenColor ? writtenColor : "Empty Value"}</p>
    <p>{hexColor ? hexColor : null}</p>
    </div>
  )
}

Square.defaultProps = {
    writtenColor: "Empty Color Value"
}
