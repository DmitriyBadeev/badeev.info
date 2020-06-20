import React from "react"
import styles from "./Logo.module.less"
import { Link } from "react-router-dom"

type typeProps = {
    className?: string
}

const Logo: React.FC<typeProps> = (props) => {
    return (
        <Link to="/">
            <div className={`${styles.logo} ${props.className}`}>
                Badeev<span className={styles.point}>.</span>info
            </div>
        </Link>
    )
}

export default Logo
