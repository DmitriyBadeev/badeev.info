import React, { useState } from "react"
import Logo from "../../../components/logo/Logo"
import Burger from "../../../components/burger/Burger"
import Navbar from "../navbar/Navbar"
import styles from "./Header.module.less"
import { Layout } from "antd"
import useStore from "../../../store/useStore"
import { observer } from "mobx-react"

const Header: React.FC = observer(() => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    const { navStore } = useStore()

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
                <Logo isBack={navStore.isWorkPage} />

                <Burger onClick={() => setIsOpenNavbar(true)} />
            </div>
        </Layout.Header>
    )
})

export default Header
