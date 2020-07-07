import React from "react"
import styles from "./elements.module.less"

type propTypes = {
    className?: string
}

const Line: React.FC<propTypes> = (props) => {
    return <div className={`${styles.line} ${props.className}`} />
}

export default Line
