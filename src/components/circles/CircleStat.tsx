import React from "react"
import { Typography } from "antd"
import styles from "./circles.module.less"

const { Paragraph } = Typography

type propTypes = {
    number: number
    desc: string
}

const CircleStat: React.FC<propTypes> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}>{props.number}</div>
            <Paragraph>{props.desc}</Paragraph>
        </div>
    )
}

export default CircleStat
