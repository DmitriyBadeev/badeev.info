import React from "react"
import styles from "./links.module.less"

type propTypes = {
    to: string
    type?: "dark" | "default"
    className?: string
}

const GlobalLink: React.FC<propTypes> = ({ to, type = "default", className, children }) => {
    const darkOrWhite = type === "default" ? styles.default : styles.dark

    return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={`${darkOrWhite} ${className}`}>
            <span className={type === "default" ? "underline" : "underline-white"}>{children}</span>
        </a>
    )
}

export default GlobalLink
