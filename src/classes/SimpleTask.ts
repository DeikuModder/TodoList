import SimpleTasks from "./types";

class SimpleTask implements SimpleTasks {
    title: string;
    priority: string;
    isChecked: boolean

    constructor(title: string, priority: string, isChecked = false) {
        this.title = title;
        this.priority = priority
        this.isChecked = isChecked
    }
}

export default SimpleTask