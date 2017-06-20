'use strict'

export default class Todo {
    constructor(title, task) {
        this.title = title
        this.task = task
        this.complete = false
    }

    get isComplete() {
        return this.complete
    }

    done() {
        this.complete = true
    }
    undone() {
        this.complete = false
    }
}
