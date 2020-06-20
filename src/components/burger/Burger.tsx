import React from "react"
import styles from "./Burger.module.less"

type propTypes = {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Burger: React.FC<propTypes> = (props) => {
    return (
        <div className={styles.wrapper} onClick={props.onClick}>
            <div className={styles.burger} />
        </div>
    )
}

export default Burger
