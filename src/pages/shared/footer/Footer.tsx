import React from "react"
import styles from "./Footer.module.less"
import Logo from "../../../components/logo/Logo"
import { Layout, Typography } from "antd"

const { Paragraph } = Typography

const Footer: React.FC = () => {
    return (
        <Layout.Footer className={styles.footer}>
            <Logo className={styles.logo} />
            <Paragraph style={{ color: "#909090", margin: "10px 0 0 0" }}>
                © Дмитрий Бадеев, {new Date().getFullYear()} г.
            </Paragraph>
        </Layout.Footer>
    )
}

export default Footer
