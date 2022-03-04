import React, { useState } from 'react'
import CountUp from 'react-countup';

// https://www.npmjs.com/package/react-countup
// npm i react-countup

function NumberAnimation() {
  const [animate , setAnimate] = useState(false)

const scrollChanged = () => {
  if(window.scrollY >= 1700){
    setAnimate(true)
  }
}

window.addEventListener('scroll', scrollChanged)

  return (
    <div>
      {animate ? <CountUp end={150}duration={2}suffix='+'/> : <h1>0</h1> }
    </div>
  )
}

export default NumberAnimation