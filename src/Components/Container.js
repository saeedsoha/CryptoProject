import React from 'react'
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section8 from './Section8';
import Section9 from './Section9';


function Container() {
    return (
        <div class="galary">
            <div>
                <div class="x-page">
                    <main>
                        <NavBar />
                        <Header/>
                        <Section3 />
                        <Section4 />
                        <Section5 />
                        <Section6 />
                        <Section8 />
                        <Section9 />
                    </main>
                </div>
            </div>

        </div>

    )
}

export default Container