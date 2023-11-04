import SimpleTasks from "./types";

class SimpleTask implements SimpleTasks {
    title: string;
    priority: string;

    constructor(title: string, priority: string) {
        this.title = title;
        this.priority = priority
    }
}

export default SimpleTask