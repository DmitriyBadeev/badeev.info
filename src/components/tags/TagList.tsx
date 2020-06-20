import React from "react"
import styles from "./tags.module.less"
import Tag from "./Tag"

type propTypes = {
    tagList: Array<string>
}

const TagList: React.FC<propTypes> = (props) => {
    return (
        <div className={styles.tagList}>
            {props.tagList.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>
            })}
        </div>
    )
}

export default TagList
