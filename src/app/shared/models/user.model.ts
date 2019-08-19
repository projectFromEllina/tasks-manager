export class User {
    constructor(
        public login: string,
        public password: string,
        public team: string,
        public access: string,
        public id?: number,
        public tasks?: string[]
    ) {}
}