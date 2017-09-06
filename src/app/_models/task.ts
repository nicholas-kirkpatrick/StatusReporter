
export class Task {

    constructor(
        public taskid: number,
        public projectid: number,
        public userid: number,
        public name: string,
        public priority: string,
        public estimate: number,
        public remaining: number,
        public completed: number,
    ) { }
}