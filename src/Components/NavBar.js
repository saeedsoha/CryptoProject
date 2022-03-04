import React, { useState } from 'react'
import MenuNav from './MenuNav'
import '../App.css';
import { pruductsSubMenu, supportSubMenu,newsSubMenu,componySubMenu } from './NavItems';


function NavBar() {

        const [active , setActive]= useState(false)


        const changeNavbar = () => {
            if(window.scrollY >= 80){
                setActive(true)
            }else{
                setActive(false)
            }
        }
        window.addEventListener('scroll' , changeNavbar);

    return (
        <nav className={ active ? 'headeNav active' : 'headeNav'}>
            <div className="navBar">
                <div className="logoPhoto"></div>
                <div className="menu">
                    <ul>
                        <MenuNav name='PRODUCTS' subMenu2={pruductsSubMenu}/>
                        <MenuNav name='SUPPORT' subMenuSupport={supportSubMenu}/>
                        <MenuNav name='CRYPTO NEWS' subMenuNews={newsSubMenu}/>
                        <MenuNav name='COMPONY' subMenuCompony={componySubMenu}/>
                    </ul>
                </div>
                <button className='buttonNav'>DOWNLOAD</button>
            </div>
        </nav> 
  )
}

export default NavBar