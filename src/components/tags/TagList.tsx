import React, { CSSProperties } from "react"
import styles from "./tags.module.less"
import TagComponent from "./Tag"
import { Tag } from "../../types"

type propTypes = {
    tagList: Array<Tag | undefined | null>
    style?: CSSProperties
    activeTagsIds: number[]
    toggleTag: (id: number) => void
}

const TagList: React.FC<propTypes> = (props) => {
    if (!props.tagList) return <div className={styles.tagList}></div>

    return (
        <div className={styles.tagList} style={props.style}>
            {props.tagList.map((tag) => {
                if (tag)
                    return (
                        <TagComponent
                            key={tag.id}
                            isActive={props.activeTagsIds.includes(tag.id)}
                            id={tag.id}
                            onToggle={props.toggleTag}
                        >
                            {tag.title}
                        </TagComponent>
                    )
                else return null
            })}
        </div>
    )
}

export default TagList
