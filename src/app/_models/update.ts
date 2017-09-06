
export class Update {

    constructor(
        public taskid: number,
        public date: Date,
        public remaining: number,
        public completed: number,
    ) { }
}