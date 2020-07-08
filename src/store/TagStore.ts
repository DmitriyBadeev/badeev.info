import { observable, action } from "mobx"

export default class TagStore {
    @observable activeTags = [] as number[]

    @action toggleTag(id: number) {
        const isContains = this.activeTags.includes(id)

        if (isContains) {
            this.activeTags = this.activeTags.filter((tagId) => tagId !== id)
        } else {
            this.activeTags = [...this.activeTags, id]
        }
    }
}
