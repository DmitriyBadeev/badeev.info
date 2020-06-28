import React, { CSSProperties } from "react"
import styles from "./tags.module.less"
import Tag from "./Tag"

type propTypes = {
    tagList: Array<string | undefined | null>
    style?: CSSProperties
}

const TagList: React.FC<propTypes> = (props) => {
    if (!props.tagList) return <div className={styles.tagList}></div>

    return (
        <div className={styles.tagList} style={props.style}>
            {props.tagList.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>
            })}
        </div>
    )
}

export default TagList
