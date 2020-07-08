import React, { CSSProperties } from "react"
import styles from "./tags.module.less"
import TagComponent from "./Tag"
import { Tag } from "../../types"
import useStore from "../../store/useStore"
import { observer } from "mobx-react"

type propTypes = {
    tagList: Array<Tag | undefined | null>
    style?: CSSProperties
}

const TagList: React.FC<propTypes> = observer((props) => {
    const { tagStore } = useStore()

    if (!props.tagList) return <div className={styles.tagList}></div>

    return (
        <div className={styles.tagList} style={props.style}>
            {props.tagList.map((tag) => {
                if (tag)
                    return (
                        <TagComponent
                            key={tag.id}
                            isActive={tagStore.activeTags.includes(tag.id)}
                            id={tag.id}
                            onToggle={(id) => tagStore.toggleTag(id)}
                        >
                            {tag.title}
                        </TagComponent>
                    )
                else return null
            })}
        </div>
    )
})

export default TagList
