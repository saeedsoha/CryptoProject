import React from 'react'
import '../App.css';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';


function Section3() {
  return (
    <section class="section3">
    <div class="section3-box">
      <div class="section3-box-svg"><AspectRatioOutlinedIcon style={{ fontSize: 40 }}/></div>
      <p class="section3-box-p1">01</p>
      <p class="section3-box-p2">Live charts & portfolio</p>
    </div>
    <div class="section3-box">
      <div class="section3-box-svg"><AccountBalanceOutlinedIcon style={{ fontSize: 40 }}/> </div>
      <p class="section3-box-p1">02</p>
      <p class="section3-box-p2">Built-in Exchange
      </p>
    </div>
    <div class="section3-box">
      <div class="section3-box-svg"><HelpOutlineOutlinedIcon style={{ fontSize: 40 }}/> </div>
      <p class="section3-box-p1">03</p>
      <p class="section3-box-p2">24/7 human support
      </p>
    </div>
  </section>

  )
}

export default Section3