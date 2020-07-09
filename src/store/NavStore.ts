import { observable, action } from "mobx"

export default class NavStore {
    @observable isWorkPage = false
    @observable workTitle = ""
    @observable link = ""

    @action isWorkPageNow(title: string, id: number) {
        this.isWorkPage = true
        this.workTitle = title
        this.link = `/portfolio/${id}`
    }

    @action isNotWorkPageNow() {
        this.isWorkPage = false
        this.workTitle = ""
        this.link = ""
    }
}
