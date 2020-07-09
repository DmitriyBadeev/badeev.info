import React from "react"
import styles from "./Logo.module.less"
import { Link } from "react-router-dom"
import { Divider } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons"

type typeProps = {
    className?: string
    isBack?: boolean
}

const Logo: React.FC<typeProps> = (props) => {
    return (
        <div className={styles.logoWrapper}>
            {props.isBack && (
                <div onClick={() => window.history.back()} className={styles.back}>
                    <ArrowLeftOutlined className={styles.icon} />
                    <Divider type="vertical" className={styles.divider} />
                </div>
            )}

            <Link to="/">
                <div className={`${styles.logo} ${props.className}`}>
                    Badeev<span className={styles.point}>.</span>info
                </div>
            </Link>
        </div>
    )
}

export default Logo
