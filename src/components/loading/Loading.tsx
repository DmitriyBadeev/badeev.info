import React from "react"
import { Spin } from "antd"
import styles from "./Loading.module.less"

const Loading: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Spin size="large" />
        </div>
    )
}

export default Loading
