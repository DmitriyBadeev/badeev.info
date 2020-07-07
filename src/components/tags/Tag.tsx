import React from "react"
import styles from "./tags.module.less"

type propTypes = {
    isActive: boolean
    onToggle: (id: number) => void
    id: number
}

const Tag: React.FC<propTypes> = (props) => {
    return (
        <div className={`${styles.tag} ${props.isActive && styles.tagActive}`} onClick={() => props.onToggle(props.id)}>
            {props.children}
        </div>
    )
}

export default Tag
