import React from "react"
import { Link } from "react-router-dom"
import styles from "./links.module.less"

type propTypes = {
    to: string
    type?: "dark" | "default"
    className?: string
    onClick?: (event: React.MouseEvent) => void
}

const LocalLink: React.FC<propTypes> = ({ to, type = "default", className, children, onClick }) => {
    const darkOrWhite = type === "default" ? styles.default : styles.dark

    const currentHref = window.location.pathname
    const active = currentHref === to

    return (
        <Link to={to} className={`${darkOrWhite} ${className}`} onClick={onClick}>
            <span
                className={type === "default" ? "underline" : "underline-white"}
                style={{ color: active ? "#407BFF" : "" }}
            >
                {children}
            </span>
        </Link>
    )
}

export default LocalLink
