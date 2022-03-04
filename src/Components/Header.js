import React from 'react'
import '../App.css';


function Header() {
    return (

        <header class="header">
            <div class="header-img">
                <div class="hedear-transparent"></div>
            </div>
            <div class="header-section1">
                <div class="header-section1-flex">
                    <h1>Exodus Bitcoin & <br />     Crypto Wallet</h1>
                    <p>Send, receive & exchange Bitcoin and 100+ cryptocurrencies with ease<br /> on the
                        world's leading Desktop, Mobile and Hardware crypto wallets</p>
                    <div class="headr-section1-buttons">
                        <button class="button1"><i class="caret right icon"></i> WATCH VIDEO</button>
                        <button class="button2">GET EXODUS NOW</button>
                    </div>
                </div>
            </div>
            <div class="header-section2">
                <div class="transparent-triangle"></div>
                <div class="section2-circle"></div>
                <div class="section2-img">
                    <div class="section2-box">
                        <p>Pro-level control to manage <br /> your cryptocurrency in one<br />beautiful
                            application…</p>
                        <button class="ui violet button">DESKTOP WALLET<i
                            class="long arrow alternate right icon"></i> </button>
                    </div>
                </div>

                <div class="section2-box2">
                    <h1>A New World of Crypto Apps</h1>
                    
                    <p>Apps transform Exodus to give you more control over your wealth.<br />
                        Discover how to easily earn interest and more...</p>
                    <div class="section2-img2"></div>
                    <button>EXPLORE APPS</button>

                </div>
            </div>
        </header>


    )
}

export default Header