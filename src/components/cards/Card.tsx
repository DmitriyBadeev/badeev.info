import React from "react"
import styles from "./cards.module.less"

type propTypes = {
    className?: string
}

const Card: React.FC<propTypes> = (props) => {
    return <div className={`${props.className} ${styles.card}`}>{props.children}</div>
}

export default Card
