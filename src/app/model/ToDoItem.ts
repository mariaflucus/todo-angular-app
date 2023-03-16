class ToDoItem {

    id: string;
    content: string;
    date: Date;
    completed: boolean;

    constructor(content: string, date: Date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.completed = false;
    }

    static fromJSON (json: { content: any; date: any; id: string; completed: boolean; }){
        let toDoItem = new ToDoItem(json.content, json.date);
        toDoItem.id = json.id;
        toDoItem.completed = json.completed;

        return toDoItem;
    }
}

export default ToDoItem;