import React, { useState } from 'react'
import Logo from '../../../components/logo/Logo'
import Burger from '../../../components/burger/Burger'
import Navbar from "../navbar/Navbar";
import styles from './Header.module.less'

const Header: React.FC = () => {

    const [isOpenNavbar, setIsOpenNavbar] = useState(false)

    return (
        <>
            <Navbar onClose={() => setIsOpenNavbar(false)} isOpen={isOpenNavbar} />
            <div className={styles.wrapper}>
                <Logo />
                <Burger onClick={() => setIsOpenNavbar(true)} />
            </div>
        </>

    )
}

export default Header