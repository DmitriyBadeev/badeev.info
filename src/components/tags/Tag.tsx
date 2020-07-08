import React from "react"
import styles from "./tags.module.less"
import LocalLink from "../links/LocalLink"

type propTypes = {
    isActive: boolean
    onToggle: (id: number) => void
    id: number
}

const Tag: React.FC<propTypes> = (props) => {
    return (
        <LocalLink to="/portfolio">
            <div
                className={`${styles.tag} ${props.isActive && styles.tagActive}`}
                onClick={() => props.onToggle(props.id)}
            >
                {props.children}
            </div>
        </LocalLink>
    )
}

export default Tag
