import React, { useState } from "react"
import Logo from "../../../components/logo/Logo"
import Burger from "../../../components/burger/Burger"
import Navbar from "../navbar/Navbar"
import styles from "./Header.module.less"
import { Layout } from "antd"

const Header: React.FC = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)

    return (
        <Layout.Header
            style={{
                background: "transparent",
                height: "auto",
                padding: "0",
                lineHeight: "inherit",
            }}
        >
            <Navbar onClose={() => setIsOpenNavbar(false)} isOpen={isOpenNavbar} />
            <div className={styles.wrapper}>
                <Logo />
                <Burger onClick={() => setIsOpenNavbar(true)} />
            </div>
        </Layout.Header>
    )
}

export default Header
